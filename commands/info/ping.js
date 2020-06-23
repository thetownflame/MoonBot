const { DiscordAPIError, MessageEmbed } = require("discord.js")

module.exports = {
    name: "ping",
    category: "other",
    description: "Returns latency and API ping",
    async execute(client, message, args) {
        const embed = new MessageEmbed()
        .setTitle("`Отклик бота`")
        .setColor("FFFFCC")
        .setDescription(`Pong! - ${client.ws.ping}ms`)
       message.channel.send(embed)
    }
}
