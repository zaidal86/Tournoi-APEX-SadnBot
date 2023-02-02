import button from '../button/createButton.js';
import { sendMessageByChannelWithComponents } from '../ultis/sendMessage.js';

export default (message, args) => {
  sendMessageByChannelWithComponents(
    message.channelId,
    'Bonjour',
    button('test', 'activer', 'DANGER')
  );
};
