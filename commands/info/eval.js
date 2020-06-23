const { OWNER } = require("../../config.json")
const Discord = require("discord.js")

module.exports = {
    name: "eval",

  execute(client, message, args, level) {
      
    if (message.author.id !== OWNER) return message.react("🔒");
  
    let code = args.join(" ");
    if (!args[0]) return message.reply  ("Введите код для выполнения.");
  
    let content = `Input:\n\`\`\`js\n${code}\`\`\`\nOutput:\n`;
  
    let emb = new Discord.MessageEmbed()
      .setAuthor("Eval", "https://media.discordapp.net/attachments/119222314964353025/692707616975224862/GWcodesJs.png")
      .setFooter(`Done for ${client.ws.ping}ms`, client.user.avatarURL({ dynamic: true }))
      .setTimestamp();
  
    try {
      let evaled = eval(code);
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
      content += `\`\`\`js\n${evaled}\`\`\``;
      emb.setColor("FFFFFF").setDescription(content);
      message.channel.send(emb);
    } catch (err) {
      content += `\`\`\`js\n${err}\`\`\``;
      emb.setColor("#ff0000").setDescription(content);
      message.channel.send(emb);
    }
}
}