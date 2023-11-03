const bot = require('./bot');
const schedule = require('node-schedule');
const { getWeather } = require('./getWeather');
const { doc, getDoc,collection,getDocs } = require('firebase/firestore');
const { db } = require('./firebaseConfig.js');

const updateRule = new schedule.RecurrenceRule();
// ADD HOUR AND MINUTE IN 24 HOUR FORMAT
updateRule.hour = 15;
updateRule.minute = 10;

function scheduleUpdates() {
  schedule.scheduleJob(updateRule, async () => {
    console.log("I am here in scheduled Updates");
    try {
      
      const chatIds = await fetchChatIds();
      if (chatIds.length === 0) {
        console.log('No users to send updates to.');
        return;
      }

      for (const chatId of chatIds) {
        bot.sendMessage(chatId, "Good morning! Here's your daily weather update.");

        const docSnapshot = await getDoc(doc(db, `subscriptions/${chatId}`));

        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          console.log(data);
          const getCity = data.msg.text;
          console.log(getCity);
          const message = `Latest update for city you Subscribed: ${getCity}`;
          bot.sendMessage(chatId, message);

          getWeather(data.msg);
        } else {
          bot.sendMessage(chatId, 'No data available for your Account.\n Please Subscribe');
        }
      }
    } catch (error) {
      console.error('Error reading data from Firestore:', error);
    
    }
  });
}


async function fetchChatIds() {
    const chatIds = [];

    const subscriptionsCollection = collection(db, 'subscriptions');
    const querySnapshot = await getDocs(subscriptionsCollection);

    querySnapshot.forEach((doc) => {
      chatIds.push(doc.id);
    });
    return chatIds;
}

module.exports = { scheduleUpdates };
