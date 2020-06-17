
 module.exports = {
  name: "say",
  category: "fun",
description: "Allows you to kiss another user",
usage: "[command | user]",
async execute(client, message, args) {
  
        if(message.guild === null)return;

  
    if (message.author.bot) return;

  const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
message.channel.send(sayMessage);
    
          
}
};
