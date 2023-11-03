
const bot = require("./bot");
const {sendUpdates } = require("./sendUpdates");
const { handleSubscribe } = require("./subscribe");
const { handleStartCommand } = require("./start");

const { handlehelpCommand } = require("./help");
const { handleUnsubscribe } = require("./unsubscribe");

const { handleWeather } = require("./handleweather");
const { getAbout } = require("./about");


function getMenu(msg) {
  const chatId = msg.chat.id;


  const menuOptions = [
    [{ text: "Start", callback_data: "start" }],
    [{ text: "Help", callback_data: "help" }],
    [{ text: "Subscribe", callback_data: "subscribe" }],
    [{ text: "Un-subscribe", callback_data: "unsubscribe" }],
    [{ text: "Weather", callback_data: "weather" }],
    [{ text: "Updates", callback_data: "updates" }],
    [{ text: "Menu", callback_data: "menu" }],
    [{ text: "About", callback_data: "about" }],
  ];

  const replyMarkup = {
    inline_keyboard: menuOptions,
  };

  bot.sendMessage(chatId, "Choose an option:", { reply_markup: replyMarkup });

  bot.on("callback_query", (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;

    switch (data) {
      case "start":
        handleStartCommand(msg);
        break;

      case "help":
        handlehelpCommand(msg);
        break;

        case "subscribe":
            handleSubscribe(msg);
            break;
        
        case "unsubscribe":
            handleUnsubscribe(msg);
            break;
        
        case "weather":
            handleWeather(msg);
            break;
        
        case "updates":
            sendUpdates(msg);
            break;
        
        case "menu":
            getMenu(msg);
            break;
        case "about":
            getAbout(msg);
            break;

      default:
        bot.sendMessage(chatId, "Please select one");
    }
  });
}

module.exports = { getMenu };
