const utils = require('../../utils');

module.exports = {
	name: "8ball",
	category: "fun",
  description: "Questions...",
  async execute(client, message, args) {

  function doMagic8BallVoodoo() {
    var rand = ['Да', 'Нет', 'Зачем ты вообще пытаешься это сделать?', 'А ты как думаешь? НЕТ!', 'Может быть...', 'Никогда', 'Даа...'];

    return rand[Math.floor(Math.random()*rand.length)];
}

  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
  
// Later in the code:
var msg1 = Array(5); 
		msg1[1] = "Да";
	    msg1[2] = "Нет";
		msg1[3] = "Зачем ты вообще пытаешься это сделать?";
		msg1[4] = "Может быть";
		msg1[5] = "Я не задумывался"
		msg1[6] = ":D" 
        var x = getRandomInt(0, 20);
		if (x < 5){ 
         if (x < 3){
			message.channel.send(msg1[1]);
		}
		else {
               message.channel.send(msg1[3]);
		}
		}
		else if (x<= 9) {
			if (x >= 7){
			message.channel.send(msg1[2]); }
				else{
                   message.channel.send(msg1[4]);
				}
		} 
		else if (x <= 12 ) { 
			message.channel.send(msg1[5]);
		}
		else {
			message.channel.send(msg1[6])
		}
		

  


  }
  };