import client from '../../main.js';

const sendMessageByChannel = (ChannelID, Message) => {
  client.channels.cache.get(ChannelID).send(Message);
};

const sendMessageByGuildChannel = (GuildID, ChannelID, Message) => {
  client.guilds.cache.get(GuildID).channels.cache.get(ChannelID).send(Message);
};

const sendMessageByChannelWithComponents = (ChannelID, message, row) => {
  client.channels.cache
    .get(ChannelID)
    .send({ content: message, components: [row] });
};

export {
  sendMessageByChannel,
  sendMessageByGuildChannel,
  sendMessageByChannelWithComponents,
};
