// const { Client, GatewayIntentBits } = require('discord.js');
// require('dotenv').config();
//
// const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
//
// client.once('ready', () => {
//     console.log('Discord bot is ready!');
// });
//
// client.login(process.env.DISCORD_BOT_TOKEN);
//
// export const sendPaymentSuccessMessage = async (username, cartItems, totalAmount) => {
//     const channel = await client.channels.fetch(process.env.DISCORD_CHANNEL_ID);
//     if (!channel) {
//         console.error('Channel not found');
//         return;
//     }
//
//     const itemsList = cartItems.map(item => `- ${item.name} (Quantity: ${item.quantity})`).join('\n');
//     const message = `**Payment Successful!**\n\n**Username:** ${username}\n**Items:**\n${itemsList}\n**Total Amount:** ₹${totalAmount / 100}\n**Status:** Successful`;
//
//     channel.send(message);
// };
//
// module.exports = { sendPaymentSuccessMessage };