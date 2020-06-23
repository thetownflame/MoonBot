const Discord = require("discord.js");
const fetch = require("node-fetch");
const { stripIndents } = require("common-tags");
const dateFormat = require("dateformat");

module.exports = {
    name: "steam",
    category: "utility",
  description: "Shows info about a Steam user",
  usage: "command",

  async execute(client, message, args) {
        const token = "0A13E251CD56AF05BA815218048D4566"; 

        if(!args[0]) return message.reply("пожалуйста, укажите никнейм");
        const url = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${token}&vanityurl=${args.join(" ")}`;

        fetch(url).then(res => res.json()).then(body => {
            if(body.response.success === 42) return message.reply("я не могу найти профиль Steam c таким никнеймом");

                const id = body.response.steamid;
                const summaries = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${token}&steamids=${id}`;
                const bans = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${token}&steamids=${id}`;
                const state = ["Offline", "Online", "Busy", "Away", "Snooze", "Looking to trade", "Looking to play"];

        fetch(summaries).then(res => res.json()).then(body => {
            if(!body.response) return message.reply("я не могу найти профиль Steam c таким никнеймом");
            const { personaname, avatarfull, realname, personastate, loccountrycode, profileurl, timecreated } = body.response.players[0];

        fetch(bans).then(res => res.json()).then(body => {
            if(!body.players) return message.reply("я не могу найти профиль Steam c таким никнеймом");
            const { NumberOfVACBans, NumberOfGameBans} = body.players[0];

            const embed = new Discord.MessageEmbed()
                .setColor("FFFFCC")
                .setAuthor(`Steam | ${personaname}`, avatarfull)
                .setThumbnail(avatarfull)
                .setDescription(stripIndents`**Реальное имя:** ${realname || "Неизвестно :("}
                **Статус:** ${state[personastate]}
                **Страна:** :flag_${loccountrycode ? loccountrycode.toLowerCase() : "white"}:
                **Дата создания аккаунта:** ${dateFormat(timecreated * 1000, "d/mm/yyyy (h:MM:ss TT)")}
                **Баны:** Vac: ${NumberOfVACBans}, Game: ${NumberOfGameBans}
                **Ссылка:** [ссылка на профиль](${profileurl})`)
                .setTimestamp();

                message.channel.send(embed)
            })
        })
    })
  }
}