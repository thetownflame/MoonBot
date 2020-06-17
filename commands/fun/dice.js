const Discord = module.require("discord.js");
const randomnum = require("unique-random");
const rand = randomnum(1, 6);

module.exports = {
    name: "dice",
    category: "fun",
  description: "Allows you to cuddle another user",
  usage: "[command | user]",
  async execute(client, message, args) {


    await message.channel.send("Бросаю кости...")
        .then(message => message.edit(`Жребий брошен: ${rand()}`));



}
};