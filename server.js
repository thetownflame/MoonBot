const Discord = require("discord.js")
const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json")
const moment = require("moment");

const client = new Client({
  disableEveryone: true
})

client.on('ready', () => {

    process.setMaxListeners(0);
      process.setMaxListeners(0);
      client.user.setActivity(`m.help | ${client.guilds.cache.size} servers `, {
      type: "STREAMING",
      url: "https://www.twitch.tv/thetownflame"
  })
});


client.on("warn", info => console.log(info));
client.on("error", console.error)

client.commands = new Discord.Collection()
client.aliases = new Collection();
client.queue = new Map();

//// приветствие человека
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === `┃✨прибывшие`);
  if (!channel) return;
  var embed = new Discord.MessageEmbed()
.setColor("FF9999")
.setDescription(`${member} присоединился к семейке сервера '**Городок Жизни**' `)
.setImage("https://media.discordapp.net/attachments/698514137852018688/715867160534057041/-1.png?width=855&height=481")
.setFooter('Puella - все права анимированы', 'https://fast-anime.ru/shop/upload/198594.jpg');

    channel.send(embed);
    var embed = new Discord.MessageEmbed()

  .setColor("FF9999")
  .setDescription(`** Хей! Приветствую тебя на сервере "Городок жизни"! 🎇
  Надеюсь, ты обретешь здесь свою атмосферу и общение. 
  И не забывай, что на сервере присутствуют правила общения, которые ты можешь найти в канале #📙информация.
  А так же, ты можешь взять себе любую игровую роль в канале #⭐роли.
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
  client.channels.cache.get("704431613530079323").send(embed);

});

client.on("guildDelete", guild => {
  let embed = new Discord.MessageEmbed()
    .setTitle(`<:suicidekanna:723501102749712384> Бот покинул сервер`)
    .setColor("FF0033")
    .addField("Название сервера", guild.name, true)
    .addField("ID сервера", `\`${guild.id}\``, true)
    .addField("Владелец сервера", `\`${guild.owner.user.tag}\``, true)
    .addField("Участников", guild.memberCount, true)
    .addField("Ролей", guild.roles.cache.size, true)
    .addField("Каналов", guild.channels.cache.size, true)
    .addField("Сервер создан", moment(guild.createdAt).fromNow(), true)
    .addField("Серверов бота", client.guilds.cache.size, true);
  client.channels.cache.get("704431613530079323").send(embed);

});

client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  
  if(message.content.startsWith(PREFIX)) {
    
    const args = message.content.slice(PREFIX.length).trim().split(/ +/) 
    const command = args.shift().toLowerCase();
    if (!command) command = client.commands.get(client.aliases.get(cmd));


    if(!client.commands.has(command)) {
      return;
    } 
    
  try  { 
      client.commands.get(command).execute(client, message, args)
    } catch (err) { 
      console.log(err)
      message.reply("I am getting error on using this command")
    }
    
  }
  
  
});
 


client.login(TOKEN)
