const bot = require('./bot'); 


function handlehelpCommand(msg) {
    const chatId = msg.chat.id;
    const description = 'In this Bot you need to enter the Name of the City for which you want to get weather updates';
    bot.sendMessage(chatId, description);
  }
  
module.exports = {handlehelpCommand};