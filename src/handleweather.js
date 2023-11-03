const bot = require('./bot'); 
const { getWeather } = require('./getWeather');

 function handleWeather(msg) {
  console.log("hello in weather");
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Enter your City Name:');
    
    bot.once('message', async (msg) => {
      getWeather(msg);
 });
    }

  module.exports = { handleWeather };