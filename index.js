const { Client, Intents, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const { token, welcomeChannel } = require('./config.json');



const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.once('ready', () => {
	console.log('Ready!');
});


client.on('guildMemberAdd', (member) => {
	const channel = member.guild.channels.cache.get(welcomeChannel);
	const exampleEmbed = new EmbedBuilder()
		.setTitle('Welcome!')
		.setDescription(`${member} has joined the server!\nTotal Members: ${member.guild.members.cache.size}`)
		.setThumbnail(member.displayAvatarURL());

	channel.send({ embeds: [exampleEmbed] });
})


client.login(token);