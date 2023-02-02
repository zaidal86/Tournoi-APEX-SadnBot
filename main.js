import * as event from './src/event/index.js';
import { Client, Intents } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(process.env.TOKEN);

for (const key in event) {
  console.log(`Loading Event: ${key}`);
  client.on(key, event[key]);
}

export default client;
