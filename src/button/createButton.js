import { MessageActionRow, MessageButton } from 'discord.js';

export default (CustomeID, Label, Style) => {
  return new MessageActionRow().addComponents(
    new MessageButton().setCustomId(CustomeID).setLabel(Label).setStyle(Style)
  );
};
