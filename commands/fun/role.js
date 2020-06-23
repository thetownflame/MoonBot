const Discord = require('discord.js');

module.exports = {
    name: "role",
    category: "fun",
  description: "Allows you to tickle a user",
  usage: "[command | user]",
  async execute(client, message, args) {

        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);

        if (!role) {
            return message.reply('пожалуйста, введите существующую роль...');
        }

        const roleEmbed = new Discord.MessageEmbed()
                .setColor(role.hexColor)
                .setThumbnail(message.guild.iconURL)
                .setTitle('Информация о роли')
                .addField(':arrow_right: Название', role.name, true)
                .addField(':arrow_right: ID', role.id, true)
                .addField(':arrow_right: Дата создания', role.createdAt.toDateString(), true)
                .addField(':arrow_right: Отображаемая отдельно', role.hoist ? 'Да' : 'Нет', true)
                .addField(':arrow_right: Возможность упоминания', role.mentionable ? '+' : '-', true)

        message.channel.send(roleEmbed);
    },
};