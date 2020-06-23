const Discord = module.require("discord.js");
const randomnum = require("unique-random");
const rand = randomnum(1, 6);

module.exports = {
    name: "dice",
    
  async execute(client, message, args) {


    await message.channel.send("Бросаю кости...")
        .then(message => message.edit(`Жребий брошен: ${rand()}`));



}
};