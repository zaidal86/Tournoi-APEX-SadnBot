import * as commands from '../commands/index.js';

export default async (message) => {
  if (message.author.bot) return;

  const args = message.content.split(' ');
  const command = args.shift();
  const prefix = command.at(0);
  const commandName = command.slice(1);

  if (prefix !== '!') return;

  for (const key in commands) {
    if (commandName === key.toLocaleLowerCase()) {
      commands[key](message, args);
    }
  }
};
