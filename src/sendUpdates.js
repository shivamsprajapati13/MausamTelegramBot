const bot = require('./bot'); 
const { getWeather } = require('./getWeather');
const { doc, getDoc } = require('firebase/firestore');
const {db }= require('./firebaseConfig.js'); 

async function sendUpdates(msg) {
    const chatId = msg.chat.id; 
    try {
        const docSnapshot = await getDoc(doc(db,`subscriptions/${chatId}`));
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
    } catch (error) {
        console.error('Error reading data from Firestore:', error);
        bot.sendMessage(chatId, 'An error occurred while fetching updates from Firestore.');
    }
}

module.exports = {sendUpdates};