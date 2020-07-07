const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const fetch = require("node-fetch");

module.exports = {
    name: "inst",
async execute(client, message, args) {
        const name = args.join(" ");

        if (!name) {
            return message.reply("Беды...")
                .then(m => m.delete(5000));
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            
            const embede = new MessageEmbed()
            .setAuthor('Возникла ошибка!', 'https://cdn1.iconfinder.com/data/icons/rounded-set-5/48/symbol-forbidden-512.png')
            .setDescription(`Попробуйте ввести никнейм аккаунта без "@" или же перепроверьте правильность написания`)
            .setColor(`FFFFCC`)

            return message.channel.send(embede)

        }

        const account = res.graphql.user;

        const embed = new MessageEmbed()
            .setColor("FF9999")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Информация о профиле", stripIndents`**Никнейм:** ${account.username}
            **Полное имя:** ${account.full_name}
            **Биография:** ${account.biography.length == 0 ? "Отсутствует" : account.biography}
            **Постов:** ${account.edge_owner_to_timeline_media.count}
            **Кол-во подписчиков:** ${account.edge_followed_by.count}
            **Кол-во подписок:** ${account.edge_follow.count}
            **Приватный аккаунт? :** ${account.is_private ? "+ 🔐" : "- 🔓"}`);

        message.channel.send(embed);
    }
}