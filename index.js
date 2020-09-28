const Telegraf = require("telegraf");
const bot = new Telegraf("1273868389:AAEh54hU5fdedK0S8BlD3P3vXrwdatlTTfY");

const commands = {
  url: "https://t.me/KarocheChannel",
  welcomeText: `Привіт, ми раді тебе бачити. Приєднуйся до нас та заповнюй форму: https://t.me/KarocheChannel`,
  answer: "I am a robot, not a slave",
  keyboardText: "You try to get keyboard",
};
bot.start((msg) => msg.reply(commands.welcomeText));

bot.telegram.setWebhook("https://karoche-project.herokuapp.com");
bot.startWebhook("/", null, Number(process.env.PORT));
console.log("botstart");
