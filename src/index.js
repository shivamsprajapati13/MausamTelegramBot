const { handleWeather } = require("./handleweather");
const { handleSubscribe } = require("./subscribe");
const { sendUpdates } = require("./sendUpdates");
const { handleUnsubscribe } = require("./unsubscribe");
const { getMenu } = require("./menu");
const { handleStartCommand } = require("./start");
const {scheduleUpdates} = require("./scheduleUpdates");

const bot = require("./bot");
const { getAbout } = require("./about");

bot.onText(/\/start/, (msg) => { handleStartCommand(msg); });

bot.onText(/\/help/, (msg) => {  handlehelpCommand(msg); });

bot.onText(/\/weather/, (msg) => handleWeather(msg));

bot.onText(/\/subscribe/, (msg) => handleSubscribe(msg));

bot.onText(/\/unsubscribe/, (msg) => handleUnsubscribe(msg));

bot.onText(/\/menu/, (msg) => getMenu(msg));

bot.onText(/\/getupdates/, (msg) => sendUpdates(msg));

bot.onText(/\/dailyupdates/, (msg) => scheduleUpdates(msg));


bot.onText(/\/about/,(msg) => getAbout(msg));