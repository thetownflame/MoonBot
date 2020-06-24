module.exports = {
  name: "bug",
async execute(client, message, args) {

    if (!args[0]) return message.reply("пожалуйста, укажите баг. Пример:\n`команда m.osu не работает, не выдаёт результаты игрока, скрин: https://prnt.sc/t5vapo`");
    if (args[0] === "bug") return message.reply("пожалуйста, укажите баг. Пример:\n`команда m.osu не работает, не выдаёт результаты игрока, скрин: https://prnt.sc/t5vapo`");
    args = args.join(" ");
    message.reply(`Благодарю за аплоад бага!`);
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) репортнул в :\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nНа сервере: **${message.guild.name}**\nАйди сервера: **${message.guild.id}**`;
    client.channels.cache.get("725453569469448261").send(content)
}
}