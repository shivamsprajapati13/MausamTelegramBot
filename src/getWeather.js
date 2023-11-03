const bot = require('./bot'); 
const axios = require('axios');

async function getWeather(msg){
    const chatId = msg.chat.id;
    const userInput = msg.text;
    console.log("In get Weather");
    try {
        if (/^[a-zA-Z\s]+$/.test(userInput)) {
          const response =  await axios.get(
            `ADD YOUR API URL`
          );

          const data =  response.data; 
          const weather = data.weather[0].description;
          const temperature = data.main.temp - 273.15;
          const city = data.name;
          const humidity = data.main.humidity;
          const pressure = data.main.pressure;
          const windSpeed = data.wind.speed;
          const message = `City Name: ${city} \nWeather: ${weather}\nTemperature: ${temperature.toFixed(2)}°C \nHumidity: ${humidity}% \nPressure :${pressure}hPa \nWind Speed:${windSpeed}m/s.`;
        bot.sendMessage(chatId, message);
        }
      } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, "City doesn't exist.");
      }
}

module.exports = {getWeather};