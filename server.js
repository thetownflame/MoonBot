const Discord = require("discord.js")
const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json")
const moment = require("moment");
const db = require("quick.db")

let apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxOTY2NDUwNDIwMzY0MDk3NSIsImlhdCI6MTU5MzAyNDczOX0.2d7QhcQbhuWkzNFFokZY9tC73AWuulR8ZVv_3reAOmU  ";
const SDC = require("@megavasiliy007/sdc-api");
const clientSDC = new SDC(apiKey);


const client = new Client({
 disableEveryone: true
})

client.on('ready', () => {

 clientSDC.setAutoPost(client);
 process.setMaxListeners(0);
 process.setMaxListeners(0);
 client.user.setActivity(`m.help || ${client.guilds.cache.size} серверов `, {
  type: "STREAMING",
  url: "https://www.twitch.tv/thetownflame"

 })
});

client.on("message", message => {
 if (message.author.bot) return;
 if (!message.guild) return;

 if (message.content.startsWith(`<@!719664504203640975>`)) {
  const embed = new Discord.MessageEmbed()
   .setTitle(`Информация обо мне <:smug:725447218319982682>`)
   .setDescription(`**Глобальный префикс бота:** ${PREFIX}`)
   .addField(`**Основные команды бота для ознакомления:**`, " ``m.help`` | ``m.stats``")
   .addField(`**Полезные ссылки:**`, " [Сервер поддержки](https://discord.gg/93wFswg) | [Добавить бота](https://discord.com/oauth2/authorize?client_id=719664504203640975&scope=bot&permissions=2054351998) | [Мониторинг](https://bots.server-discord.com/719664504203640975)")
   .setImage(`https://media.discordapp.net/attachments/702081112792498256/715871097907839007/advertise_light_bar.gif`)
   .setColor(`FFFFCC`)

  message.channel.send(embed);
 }
})

client.on("warn", info => console.log(info));
client.on("error", console.error)

client.commands = new Discord.Collection()
client.aliases = new Collection();
client.queue = new Map();


client.on('guildMemberAdd', member => {
 const channel = member.guild.channels.cache.find(ch => ch.name === `‖🚕прибывшие`);
 if (!channel) return;
 var embed = new Discord.MessageEmbed()

  .setColor("FF9999")
  .setDescription(`${member} присоединился к семейке сервера '**Moonlight's house**' `)
  .setImage("https://media.discordapp.net/attachments/698514137852018688/715867160534057041/-1.png?width=855&height=481")

 channel.send(embed);
 var embed = new Discord.MessageEmbed()

  .setColor("FF9999")
  .setDescription(`** Хей! Приветствую тебя на сервере поддержки бота Moonlight#5216!
  На данном сервере ты сможешь задать любой интересующий тебя вопрос по работе бота, или рассказать
  о известном тебе баге. А так же тебе необходимо протитать правила в канале - <#704917166872330380>.
  Хорошего времяпрепровождения, надеюсь, ты останешься с нами 🍇**`)

  .setImage("https://media.discordapp.net/attachments/698514137852018688/715867160534057041/-1.png?width=855&height=481")
  .setTimestamp()

 member.send(embed);

});


["command"].forEach(handler => {
 require(`./handlers/${handler}`)(client);
});

const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
 const command = require(join(__dirname, "commands", file))
 client.commands.set(command.name, command)
}

client.on("guildCreate", guild => {
 let embed = new Discord.MessageEmbed()
  .setTitle(`<a:sayorijump:723500622141325313> Бот был добавлен на новый сервер`)
  .setColor("33FFFF")
  .addField("Название сервера", guild.name, true)
  .addField("ID сервера", `\`${guild.id}\``, true)
  .addField("Владелец сервера", `\`${guild.owner.user.tag}\``, true)
  .addField("Участников", guild.memberCount, true)
  .addField("Ролей", guild.roles.cache.size, true)
  .addField("Каналов", guild.channels.cache.size, true)
  .addField("Сервер создан", moment(guild.createdAt).fromNow(), true)
  .addField("Серверов бота", client.guilds.cache.size, true);
 client.channels.cache.get("727585610403020820").setName(`🍒Серверов бота: ${client.guilds.cache.size}`);
 client.channels.cache.get("726493795063038002").send(embed);

});

client.on("guildDelete", guild => {
 let embed = new Discord.MessageEmbed()
  .setTitle(`<:suicidekanna:723501102749712384> Бот покинул сервер`)
  .setColor("FF0066")
  .addField("Название сервера", guild.name, true)
  .addField("ID сервера", `\`${guild.id}\``, true)
  .addField("Владелец сервера", `\`${guild.owner.user.tag}\``, true)
  .addField("Участников", guild.memberCount, true)
  .addField("Ролей", guild.roles.cache.size, true)
  .addField("Каналов", guild.channels.cache.size, true)
  .addField("Сервер создан", moment(guild.createdAt).fromNow(), true)
  .addField("Серверов бота", client.guilds.cache.size, true);
 client.channels.cache.get("727585610403020820").setName(`🍒Серверов бота: ${client.guilds.cache.size}`);
 client.channels.cache.get("726493795063038002").send(embed);

});

client.on("message", message => {
 if (message.author.bot) return;
 if (!message.guild) return;

 let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = PREFIX;

 if (message.content.startsWith(prefix)) {

  const args = message.content.slice(prefix.length).trim().split(/ +/)
  const command = args.shift().toLowerCase();
  if (!command) command = client.commands.get(client.aliases.get(cmd));


  if (!client.commands.has(command)) {
   return;
  }

  try {
   client.commands.get(command).execute(client, message, args)
  } catch (err) {
   console.log(err)
   message.reply("Возникли неполадки с выполнением данной команды")
  }
 }
});


client.login(TOKEN)
