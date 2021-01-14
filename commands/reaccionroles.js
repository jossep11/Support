module.exports = {
	name: "reaccionroles",
	description: "Reacciones en embed!",
  async	execute(Discord, client, message, Embed, ChannelIDs) {

	
function emoji (id) {
    return client.emojis.cache.get(id).toString();
}

	const ThiefRole = message.guild.roles.cache.find(role => role.name === "Thief");
	const HunterRole = message.guild.roles.cache.find(role => role.name === "Hunter");
	const TraderRole = message.guild.roles.cache.find(role => role.name === "Trader");
	
	const thiefEmoji= ('798055358044176414');
	const hunterEmoji= ('798055357863297024');
	const traderEmoji= ('798055358207229962');
	
	Embed
	.setColor('RANDOM')
	.setTitle('Selecciona un color\n')
	.setThumbnail("https://i.imgur.com/7bh8ur3.png")
	.setDescription(`Click en la reacción para aignar alguno de estos roles`);
	
	let messageEmbed = await message.channel.send(Embed);
	messageEmbed.react(thiefEmoji);
	messageEmbed.react(hunterEmoji);
	messageEmbed.react(traderEmoji);
	

	Embed
	.setColor('RANDOM')
	.setTitle('Selecciona un color\n')
	.setThumbnail("https://i.imgur.com/7bh8ur3.png")
	.setDescription(`Click en la reacción para aignar alguno de estos roles`);
	
	let messageEmbed1 = await message.channel.send(Embed);
	messageEmbed.react(thiefEmoji);


	

	client.on('messageReactionAdd', async (reaction, user) =>{
		if(user.bot) return;
		if(!reaction.message.guild) return;
		if(reaction.message.channel.id==ChannelIDs.RolesChannelID){

		if(reaction.emoji.id === thiefEmoji){

			await reaction.message.guild.members.cache.get(user.id).roles.remove();
			await reaction.message.guild.members.cache.get(user.id).roles.add(ThiefRole);
		
		} else if (reaction.emoji.id === hunterEmoji){
			await reaction.message.guild.members.cache.get(user.id).roles.add(HunterRole);
		}
		else if (reaction.emoji.id === traderEmoji){
			await reaction.message.guild.members.cache.get(user.id).roles.add(TraderRole);
		}
		 else 
		 {return;}
		}

	});

	
	client.on('messageReactionRemove', async (reaction, user) =>{
		
		if(user.bot) return;
		if(!reaction.message.guild) return;
		if(reaction.message.channel.id==ChannelIDs.RolesChannelID){

		if(reaction.emoji.id === thiefEmoji){
			await reaction.message.guild.members.cache.get(user.id).roles.remove(ThiefRole);
		}
	 else if (reaction.emoji.id === hunterEmoji){
		await reaction.message.guild.members.cache.get(user.id).roles.remove(HunterRole);
	}
	else if (reaction.emoji.id === traderEmoji){
		await reaction.message.guild.members.cache.get(user.id).roles.remove(TraderRole);
	}

	else{ return;}
}
	});




	}


}