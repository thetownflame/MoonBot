const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
	name: "kick",
	category: "moderation",
  description: "кик пользователя",
  async execute(client, message, args) {

        if (message.deletable) message.delete();

        // No args
        if (!args[0]) {
            return message.reply("Пожалуйста, укажите причину кика")
                .then(m => m.delete(5000));
        }

        // No reason
        if (!args[1]) {
            return message.reply("Пожалуйста, укажите причину кика")
                .then(m => m.delete(5000));
        }

        // No author permissions
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.reply("❌ Вы не имеете прав для блокировки пользователей.")
                .then(m => m.delete(5000));
        }

        // No bot permissions
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.reply("❌ У меня нет прав на кик пользователей, пожалуйста, свяжитесь с администратором сервера.")
                .then(m => m.delete(5000));
        }

        const toKick = message.mentions.members.first() || message.guild.members.get(args[0]);

        // No member found
        if (!toKick) {
            return message.reply("Я не могу найти данного пользователя на сервере")
                .then(m => m.delete(5000));
        }

        // Can't kick urself
        if (toKick.id === message.author.id) {
            return message.reply("Вы не можете кикнуть себя...")
                .then(m => m.delete(5000));
        }

        // Check if the user's kickable
        if (!toKick.kickable) {
            return message.reply("Я не могу кикнуть данного пользователя, т.к он имеет роль, которая находится выше моей")
                .then(m => m.delete(5000));
        }
                
        const embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(toKick.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(stripIndents`**- Kicked member:** ${toKick} (${toKick.id})
            **- Kicked by:** ${message.member} (${message.member.id})
            **- Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor(`Данная верификация действует 30с`)
            .setDescription(`Вы точно хотите кикнуть ${toKick}?`)

        // Send the message
        await message.channel.send(promptEmbed).then(async msg => {
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // The verification stuffs
            if (emoji === "✅") {
                msg.delete();

                toKick.kick(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`Хээй...плохие новости, что-то сломалось, пожалуйста, попробуйте чуть позже`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {
                msg.delete();

                message.reply(`Кик отменён`)
                    .then(m => m.delete(10000));
            }
        });
    }
};
