const bot = require('./bot'); 


function getAbout(msg) {
    const chatId = msg.chat.id;
    const description = 'This is Weather Bot.';
    bot.sendMessage(chatId, description);
  }

module.exports = {getAbout};