const TelegramBot = require('node-telegram-bot-api');
const token = 'ADD YOUR TOKEN HERE';
const bot = new TelegramBot(token, {polling: true});
module.exports = bot;


//Command List
// start-This command typically welcomes users to your bot and provides initial instructions on how to use it.

// help-Use this command to provide users with information on how to use your bot, its available commands, or to offer general assistance.

// subscribe-Implement this command to allow users to subscribe to updates, services, or notifications from your bot. You can prompt users to provide additional information like their preferences or location.

// unsubscribe-Use this command to let users opt-out of receiving updates or notifications from your bot.

// weather-this command can trigger a weather lookup based on a user's input, such as a city name.

// menu-This helps organize your bot's functionality into categories.


// about-Use this command to provide information about your bot, its purpose, and any credits or acknowledgments.


// /commands: Display a list of available commands to users, helping them discover what your bot can do.