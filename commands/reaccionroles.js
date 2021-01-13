module.exports = {
	name: "reaccionroles",
	description: "Reacciones en un embed!",
  async	execute(Discord, client, message, Embed) {

	
function emoji (id) {
    return client.emojis.cache.get(id).toString();
}

	const ThiefRole = message.guild.roles.cache.find(role => role.name === "Thief");
	const parerole = message.guild.roles.cache.find(role => role.name === "Thief");
	const thiefEmoji= emoji('798055358044176414');
	const thiefEmoji1= ('798055358044176414');
	const pare = ('🛑');
	
	Embed
	.setColor('RANDOM')
	.setTitle('Selecciona un color\n')
	.setThumbnail("https://i.imgur.com/7bh8ur3.png")
	.setDescription(`${thiefEmoji} Click en la reacción para aignar alguno de estos roles`);
	
	let messageEmbed = await message.channel.send(Embed);
	messageEmbed.react(thiefEmoji);
	messageEmbed.react(pare);
	

	client.on('messageReactionAdd', async (reaction, user) =>{
		
		if(reaction.message.partial) await reaction.message.fetch();
		if(reaction.partial) await reaction.fetch();
		if(user.bot) return;
		if(!reaction.message.guild) return;

		if(reaction.emoji.id === thiefEmoji1){
			console.log("added");
			await reaction.message.guild.members.cache.get(user.id).roles.add(ThiefRole);
		console.log("added");
		}
		 else {return;}

	});

	
	client.on('messageReactionRemove', async (reaction, user) =>{
		
		if(reaction.message.partial) await reaction.message.fetch();
		if(reaction.partial) await reaction.fetch();
		if(user.bot) return;
		if(!reaction.message.guild) return;

		if(reaction.emoji.id === thiefEmoji1){
			console.log("added");
			await reaction.message.guild.members.cache.get(user.id).roles.remove(ThiefRole);
		console.log("added");
		}
		 else {return;}

	});




	}


}