const utils = require('../../utils');

const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;

module.exports = {
    name: "calc",
    category: "utility",
  description: "Calculates a math equation",
  usage: "[command | input]",
  async execute(client, message, args) {
  //command
  
  if(args.length < 1)
  return message.reply(`You must provide a equation to be solved on the calculator`);

const question = args.join(' ');

let answer;
if(question.indexOf('9 + 10') > -1) {
  answer = '21';
} else {
  try {
      answer = math.eval(question);
  } catch (err) {
      message.channel.send(`Invalid math equation`);
  }
}

message.channel.send({
  embed: utils.embed('', stripIndents`
  **Пример:**\n\`\`\`\n${question}\n\`\`\`
  **Ответ:**\n\`\`\`\n${answer}\n\`\`\`
  `)
});
  }
  };