const { scheduleJob } = require("node-schedule");
const bot = require("./bot");
const {db} = require("./firebaseConfig.js");
const { getWeather } = require("./getWeather");
const { doc, setDoc } = require("firebase/firestore");
const { scheduleUpdates } = require("./scheduleUpdates");

function add(msg) {
  const userID = msg.chat.id;
  const data = {
    msg
  };
  const userDocRef = doc(db, `subscriptions/${userID}`);

  try {
    console.log("In add function");
    setDoc(userDocRef, data);
    console.log(`Data added : `);
    return true;
  } catch (error) {
    console.error(`Error adding data: ${error}`);
    return false;
  }
}

function handleSubscribe(msg) {
  console.log("I am in Subscribe");
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const username = msg.chat.first_name + " " + msg.chat.last_name;

  try {
    bot.sendMessage(
      chatId,
      `Enter City Name for which you need weather Updates`
    );
    bot.once("message", async (msg) => {
      const city = msg.text;

      const status = await add(msg);
      console.log(status);
      if(status){
      bot.sendMessage(
        chatId,
        `You have successfully subscribed!!\nYou will get updates for City ${city} `
      );
      getWeather(msg);
      bot.sendMessage(chatId, `You Can Change anytime the city by /subscribe`);
        scheduleUpdates();
        
    }else{
        bot.sendMessage(chatId, `Failed to subscribe. Please try again later.`);

      }
    });
  } catch (error) {
    bot.sendMessage(chatId, `here ${error}`);
  }
}

module.exports = { handleSubscribe };
