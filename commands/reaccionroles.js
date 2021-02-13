module.exports = {
	name: "reaccionroles",
	description: "Reacciones en embed!",
  async	execute(Discord, client, message, Embed, ChannelIDs) {

	
function emoji (id) {
    return client.emojis.cache.get(id).toString();
}

let quit= ChannelIDs.RolesTraders;

	const ThiefRole = message.guild.roles.cache.find(role => role.id === "798056003010035712");
	const HunterRole = message.guild.roles.cache.find(role => role.id === "798056012976226324");
	const TraderRole = message.guild.roles.cache.find(role => role.id === "798056016007921724");
	
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
	
	/*  if (!message.member.roles.cache.has('798056003010035712')) {
		return message.reply('can not use this command')
	};
**/
	

	client.on('messageReactionAdd', async (reaction, user) =>{
		if(user.bot) return;
		if(!reaction.message.guild) return;
		if(reaction.message.channel.id==ChannelIDs.RolesChannelID){
			

		if(reaction.emoji.id === thiefEmoji ){
		
			for (let q = 0; q < quit.length; q++) {
			await reaction.message.guild.members.cache.get(user.id).roles.remove(quit[q]);
			}
		
			await reaction.message.guild.members.cache.get(user.id).roles.add(ThiefRole);


		} else if (reaction.emoji.id === hunterEmoji){

			for (let q = 0; q < quit.length; q++) {
						await reaction.message.guild.members.cache.get(user.id).roles.remove(quit[q]);
			}
			await reaction.message.guild.members.cache.get(user.id).roles.add(HunterRole);
		}

		else if (reaction.emoji.id === traderEmoji){

			for (let q = 0; q < quit.length; q++) {				
						await reaction.message.guild.members.cache.get(user.id).roles.remove(quit[q]);
				}
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