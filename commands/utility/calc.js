const utils = require('../../utils');

const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;

module.exports = {
    name: "calc",
  async execute(client, message, args) {
  
  if(args.length < 1)
  return message.reply(`Вы должны предоставить аргументы для решения на калькуляторе :)`);

const question = args.join(' ');

let answer;
if(question.indexOf('9 + 10') > -1) {
  answer = '21';
} else {
  try {
      answer = math.eval(question);
  } catch (err) {
      message.channel.send(`Неверные мат. аргументы`);
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