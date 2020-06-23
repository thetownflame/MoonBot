module.exports = {
  name: "say",
  category: "fun",
description: "Allows you to kiss another user",
usage: "[command | user]",
async execute(client, message, args) {
  
        if(message.guild === null)return;

  
    if (message.author.bot) return;

  const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{}); 

message.channel.send(sayMessage);
    
          
}
};
