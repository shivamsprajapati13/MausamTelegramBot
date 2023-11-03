const bot = require('./bot'); 


function handleStartCommand(msg) {
    const chatId = msg.chat.id;
    const description = 'Welcome to the Weather Update Bot! \nUse Mausam to get daily weather updates.';
    bot.sendMessage(chatId, description);
  }

module.exports = {handleStartCommand};
  