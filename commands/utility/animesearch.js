const Discord = require("discord.js");
const malScraper = require('mal-scraper');
const utils = require('../../utils');

module.exports = {
  name: "animesearch",
  category: "utility",
description: "Get info about an anime",
usage: "[command | Anime]",
async execute(client, message, args) {
//command
const search = `${args}`;
if(!search)
return message.reply('Хм, вы не добавили название аниме');

malScraper.getInfoFromName(search)
  .then((data) => {
  const malEmbed = new Discord.MessageEmbed()
    .setAuthor(`My Anime List результаты поиска по ${args}`.split(',').join(' '))
    .setThumbnail(data.picture)
    .setColor('#ffc1cc') //I personally use bubblegum pink!
    .addField('Английское назвние', data.englishTitle, true)
    .addField('Японское название', data.japaneseTitle, true)
    .addField('Жанр', data.type, true)
    .addField('Эпизоды', data.episodes, true)
    .addField('Рэйтинг', data.rating, true)
    .addField('Дата выхода', data.aired, true)
    .addField('Рейтинг', data.score, true)
    .addField('Статистика', data.scoreStats, true)
    .addField('Ссылка', data.url);

    message.channel.send(malEmbed);

  })
}
};