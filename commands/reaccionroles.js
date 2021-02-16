module.exports = {
	name: "reaccionroles",
	description: "Reacciones en embed!",
  async	execute(client, message, Embed, ChannelIDs) {

	
function emoji (id) {
    return client.emojis.cache.get(id).toString();
}

let Job_Code= ChannelIDs.RolesTradersID;
let CEmoji= ChannelIDs.CountryEmojis;
let CRoles= ChannelIDs.CountryRoles;

// Roles de Bandi
	const ThiefRole = message.guild.roles.cache.find(role => role.id === "798056003010035712");
	const HunterRole = message.guild.roles.cache.find(role => role.id === "798056012976226324");
	const TraderRole = message.guild.roles.cache.find(role => role.id === "798056016007921724");
	
//Roles de Paises 	
	const VenezuelaRole = message.guild.roles.cache.find(role => role.id === "810250008745607198");
	const ArgentinaRole = message.guild.roles.cache.find(role => role.name === "Argentina");
	const BoliviaRole = message.guild.roles.cache.find(role => role.name === "Bolivia");
	const ColombiaRole = message.guild.roles.cache.find(role => role.name === "Colombia");
	const CRRole = message.guild.roles.cache.find(role => role.name === "Costa rica");
	const ChileRole = message.guild.roles.cache.find(role => role.name === "Chile");
	const CubaRole = message.guild.roles.cache.find(role => role.name === "Cuba");
	const ElSalRole = message.guild.roles.cache.find(role => role.name === "El Salvador");
	const EacuadorRole = message.guild.roles.cache.find(role => role.name === "Eacuador");
	const EspañaRole = message.guild.roles.cache.find(role => role.name === "España");
	const GuatemalaRole = message.guild.roles.cache.find(role => role.name === "Guatemala");
	const HondurasRole = message.guild.roles.cache.find(role => role.name === "Honduras");
	const MexicoRole = message.guild.roles.cache.find(role => role.name === "Mexico");
	const NicaraguaRole = message.guild.roles.cache.find(role => role.name === "Nicaragua");
	const PanamaRole = message.guild.roles.cache.find(role => role.name === "Panama");
	const ParaguayRole = message.guild.roles.cache.find(role => role.name === "Paraguay");
	const PeruRole = message.guild.roles.cache.find(role => role.name === "Peru");
	const PuertoRRole = message.guild.roles.cache.find(role => role.name === "Puerto rico");
	const RDRole = message.guild.roles.cache.find(role => role.name === "Republica dominicana");
	const UruguayRole = message.guild.roles.cache.find(role => role.name === "Uruguay");
	

	
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

	.setDescription(`Click en la reacción para aignar alguno de estos roles`);
	let messageEmbed1 = await message.channel.send(Embed);
	for (let q = 0; q < CEmoji.length; q++) {
		messageEmbed1.react(CEmoji[q]);
	
	}
	
	/*  if (!message.member.roles.cache.has('798056003010035712')) {
		return message.reply('can not use this command')
	};
**/
	

	client.on('messageReactionAdd', async (reaction, user) =>{
		if(user.bot) return;
		if(!reaction.message.guild) return;
		if(reaction.message.channel.id==ChannelIDs.RolesChannelID){
		let Role_Code =reaction.message.guild.members.cache.get(user.id).roles.cache;
		let R_A= await reaction.message.guild.members.cache.get(user.id).roles;// with this + .remove or .add you can just add or remove a role from an user
		
		
		
		//JOB
		if(reaction.emoji.id === thiefEmoji ){
		
			for (let i = 0; i < Job_Code.length; i++) {
			if(Role_Code.has(Job_Code[i])){
			R_A.remove(Job_Code[i]);
			}
		}
		R_A.add(ThiefRole);
		}
		
		else if (reaction.emoji.id === hunterEmoji){

			for (let i = 0; i < Job_Code.length; i++) {
				if(Role_Code.has(Job_Code[i])){
				R_A.remove(Job_Code[i]);
				}
			}
			R_A.add(HunterRole);
		
		
		}

		else if (reaction.emoji.id === traderEmoji){

			for (let i = 0; i < Job_Code.length; i++) {
				if(Role_Code.has(Job_Code[i])){
				R_A.remove(Job_Code[i]);
				}
			}
			R_A.add(TraderRole);

		}

		// Country Roles
			else if (reaction.emoji.name === '🇻🇪'){
				
			//	if(reaction.message.member.roles.cache.has("810250008745607198")) {
			
			/* 
				if(reaction.message.guild.members.cache.get(user.id).roles.cache.has("810250008745607198")){
					console.log(`Yay, the author of the message has the role!`);
				  } else {
					console.log(`Nope, noppers, nadda.`);
				  }
		
		
				}**/
				


				for (let q = 0; q < CRoles.length; q++) {

	let prueba1= CRoles[q];
//console.log(prueba1);
				
	if(reaction.message.guild.members.cache.get(user.id).roles.cache.has(prueba1)){

		console.log(prueba1);
		await reaction.message.guild.members.cache.get(user.id).roles.remove(prueba1);
	}



				}

				let s = reaction.message.guild.members.cache.get(user.id).roles.cache.some(r=>["810250008745607198", "798056016007921724"].includes(r.id))
		let ss= reaction.message.guild.members.cache.get(user.id).roles.cache;
		if(ss.has("798056016007921724")) {
		// has one of the roles
		console.log("Lo tienes");
		} else {
		console.log("No lo tienes");
		// has none of the roles
		}
	
	
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
	
	else if (reaction.emoji.name === '🇻🇪'){
		await reaction.message.guild.members.cache.get(user.id).roles.remove(VenezuelaRole);
	}



	else{ return;}
}
	});




	}


}