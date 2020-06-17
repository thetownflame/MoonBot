const { prefix } = require('../../config.json');

module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command',
    aliases: ['command'],
    usage: '[command name]',
    cooldown: 5,
    async execute(client, message, args) {
       
        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "This is an embed",
            url: "http://google.com",
            description: "This is a test embed to showcase what they look like and what they can do.",
            fields: [{
                name: "Фан-команды",
                value: `${config.prefix}`,
                value: "They can have different fields with small headlines.",
                value: "They can have different fields with small headlines."
              },
              {
                name: "Masked links",
                value: "You can put [masked links](http://google.com) inside of rich embeds."
              },
              {
                name: "Markdown",
                value: "You can put all the *usual* **__Markdown__** inside of them."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Example"
            }
          }
        });
        }
        };