const bot = require("./bot");
const { db } = require("./firebaseConfig.js");
const { doc, deleteDoc, getDoc } = require("firebase/firestore");

async function handleUnsubscribe(msg) {
  const chatId = msg.from.id;
  try {
    const subscriptionRef = doc(db, `subscriptions/${chatId}`);
    const snapshot = await getDoc(subscriptionRef);

    if (snapshot.exists()) {
      await deleteDoc(subscriptionRef);

      bot.sendMessage(chatId, "You have successfully unsubscribed.");
    } else {
      bot.sendMessage(chatId, "You are not currently subscribed.");
    }
  } catch (error) {
    console.error("Error handling unsubscribe:", error);
    bot.sendMessage(chatId, "An error occurred while processing your request.");
  }
}
module.exports = { handleUnsubscribe };
