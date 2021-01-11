module.exports = {
	name: "reaccionroles",
	description: "Reacciones en un embed!",
  async	execute(Discord, client, message, Embed) {

	
function emoji (id) {
    return client.emojis.cache.get(id).toString();
}

	const ThiefRole = message.guild.roles.cache.find(role => role.name === "Thief");
    const thiefEmoji= emoji('798055358044176414');
	
	Embed
	.setColor('RANDOM')
	.setTitle('Selecciona un color\n')
	.setDescription(`${thiefEmoji} sup`+' hola');
	

	let messageEmbed = await message.channel.send(Embed);
	messageEmbed.react(thiefEmoji);

	}


}