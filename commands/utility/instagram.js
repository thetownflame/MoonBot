const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports = {
    name: "instagram",

async execute(client, message, args) {
        const name = args.join(" ");

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("Не могу найти аккаунт :(")
                .then(m => m.delete(5000));
        }

        const account = res.graphql.user;

        const embed = new MessageEmbed()
            .setColor("FF00CC")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Profile information", stripIndents`**- Username:** ${account.username}
            **- Полное имя:** ${account.full_name}
            **- Биография:** ${account.biography.length == 0 ? "none" : account.biography}
            **- Кол-во постов:** ${account.edge_owner_to_timeline_media.count}
            **- Подписчики:** ${account.edge_followed_by.count}
            **- Подписан на:** ${account.edge_follow.count}
            **- Приватный аккаунт:** ${account.is_private ? "Да 🔐" : "Нет 🔓"}`);

        message.channel.send(embed);
    }
}