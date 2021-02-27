module.exports = {
	name: "reaccionroles",
	description: "Reacciones en embed!",
  async	execute(client, message, Embed, ChannelIDs,cooldown) {
	

	
function emoji (id) {
    return client.emojis.cache.get(id).toString();
}


let CEmoji= ChannelIDs.CountryEmojis;
let ColorsEmoji= ChannelIDs.ColorsEmojis;
let CRoles= ChannelIDs.CountryRoles;
let Job_Code= ChannelIDs.RolesTradersID;
let ColorsRoles= ChannelIDs.ColorsRoles;

// Roles de Bandi
	const ThiefRole = message.guild.roles.cache.find(role => role.id === "798056003010035712");
	const HunterRole = message.guild.roles.cache.find(role => role.id === "798056012976226324");
	const TraderRole = message.guild.roles.cache.find(role => role.id === "798056016007921724");

	//ColorsRoles
	const Color1 = message.guild.roles.cache.find(role => role.name === "Color 1");
	const Color2 = message.guild.roles.cache.find(role => role.name === "Color 2");
	const Color3 = message.guild.roles.cache.find(role => role.name === "Color 3");
	const Color4 = message.guild.roles.cache.find(role => role.name === "Color 4");
	const Color5 = message.guild.roles.cache.find(role => role.name === "Color 5");
	
//Roles de Paises 	
	const VenezuelaRole = message.guild.roles.cache.find(role => role.name === "Venezuela");
	const ArgentinaRole = message.guild.roles.cache.find(role => role.name === "Argentina");
	const BoliviaRole = message.guild.roles.cache.find(role => role.name === "Bolivia");
	const ColombiaRole = message.guild.roles.cache.find(role => role.name === "Colombia");
	const ElSalRole = message.guild.roles.cache.find(role => role.name === "El salvador");
	const CRRole = message.guild.roles.cache.find(role => role.name === "Costa rica");
	const RDRole = message.guild.roles.cache.find(role => role.name === "Republica dominicana");
	const EacuadorRole = message.guild.roles.cache.find(role => role.name === "Ecuador");
	const EspañaRole = message.guild.roles.cache.find(role => role.name === "España");
	const ChileRole = message.guild.roles.cache.find(role => role.name === "Chile");
	const GuatemalaRole = message.guild.roles.cache.find(role => role.name === "Guatemala");
	const NicaraguaRole = message.guild.roles.cache.find(role => role.name === "Nicaragua");
	const HondurasRole = message.guild.roles.cache.find(role => role.name === "Honduras");
	const MexicoRole = message.guild.roles.cache.find(role => role.name === "Mexico");
	const PanamaRole = message.guild.roles.cache.find(role => role.name === "Panama");
	const PeruRole = message.guild.roles.cache.find(role => role.name === "Peru");
	const PuertoRRole = message.guild.roles.cache.find(role => role.name === "Puerto rico");
	const USRole = message.guild.roles.cache.find(role => role.name === "Estados Unidos");
	const UruguayRole = message.guild.roles.cache.find(role => role.name === "Uruguay");

	

	
	const thiefEmoji= ('798055358044176414'); 
	const hunterEmoji= ('798055357863297024');
	const traderEmoji= ('798055358207229962');	

	const channel1 = await client.channels.fetch('812427165995892746')
  
     channel1.messages.fetch().then(async (messages) =>  {
      if (messages.size < 2) {
        // Send a new message
		 
			Embed
			.setColor('RANDOM')
			.setTitle('Selecciona un color\n')
			.setThumbnail("https://i.imgur.com/7bh8ur3.png")
			.setDescription('Haz clic en la reacción correspondiente para recibir una notificación cuando alguien busque un job en especifico, puedes mencionar esos roles en el canal General');
			let messageEmbed = await message.channel.send(Embed);
			messageEmbed.react(thiefEmoji);
			messageEmbed.react(hunterEmoji);
			messageEmbed.react(traderEmoji);


			Embed
			.setTitle('Colores')
			.setDescription('Haz clic en alguno de los colores abajo de este mensaje para cambiar el color de tu nombre de usuario en el servidor.');			
			let messageEmbed1 = await message.channel.send(Embed);
			for (let q = 0; q < ColorsEmoji.length; q++) {
			messageEmbed1.react(ColorsEmoji[q]);	}      
			

			Embed
			.setTitle('Paises')
			.setDescription('Puedes asignarte uno de estos roles para mostrar tu país');
			
			let messageEmbed2 = await message.channel.send(Embed);
			for (let q = 0; q < CEmoji.length; q++) {
				messageEmbed2.react(CEmoji[q]);
			
	}      
     }
    })


	//resto de roles
	
	
	/*  if (!message.member.roles.cache.has('798056003010035712')) {
		return message.reply('can not use this command')
	};
**/

	

	client.on('messageReactionAdd', async (reaction, user) =>{
	
		if(user.bot) return;
		if(!reaction.message.guild) return;
		if(reaction.message.channel.id==ChannelIDs.RolesChannelID){
		let Reaction_Await= await reaction.message.guild.members.cache.get(user.id).roles;// with this + .remove or .add you can just add or remove a role from an user
		let Reaction_User_ID= reaction.message.guild.members.cache.get(user.id);
		let Role_Code =reaction.message.guild.members.cache.get(user.id).roles.cache;
		
		if(cooldown.has(Reaction_User_ID)){
			
			reaction.users.remove(Reaction_User_ID);
			message.author.send("**Silkroad Latino:** You're on colddown")
			return;
	}
		else {
			   // the user can react:)
			   // Adds the user to the set so that they can't talk for n seconds
			cooldown.add(Reaction_User_ID);
			setTimeout(() => {
			// Removes the user from the set after n seconds
		cooldown.delete(Reaction_User_ID);	   
			}, 1500);
		}

		//JOB
		//Thief

		if(reaction.emoji.id === thiefEmoji ){
		
			for (let i = 0; i < Job_Code.length; i++) {
			if(Role_Code.has(Job_Code[i])){
			Reaction_Await.remove(Job_Code[i]);
			}
		}
		Reaction_Await.add(ThiefRole);
		}
		
		//Hunter
		else if (reaction.emoji.id === hunterEmoji){

			for (let i = 0; i < Job_Code.length; i++) {
				if(Role_Code.has(Job_Code[i])){
				Reaction_Await.remove(Job_Code[i]);
				}
			}
			Reaction_Await.add(HunterRole);

		}

		//Trader
		else if (reaction.emoji.id === traderEmoji){

			for (let i = 0; i < Job_Code.length; i++) {
				if(Role_Code.has(Job_Code[i])){
				Reaction_Await.remove(Job_Code[i]);
				}
			}
			Reaction_Await.add(TraderRole);

		}


	//ColorsRoles
		
	else if (reaction.emoji.name === '1️⃣'){

		for (let i = 0; i < ColorsRoles.length; i++) {
			if(Role_Code.has(ColorsRoles[i])){
			Reaction_Await.remove(ColorsRoles[i]);
			}
		}
		Reaction_Await.add(Color1);

	}

	else if (reaction.emoji.name === '2️⃣'){

		for (let i = 0; i < ColorsRoles.length; i++) {
			if(Role_Code.has(ColorsRoles[i])){
			Reaction_Await.remove(ColorsRoles[i]);
			}
		}
		Reaction_Await.add(Color2);

	}

	else if (reaction.emoji.name === '3️⃣'){

		for (let i = 0; i < ColorsRoles.length; i++) {
			if(Role_Code.has(ColorsRoles[i])){
			Reaction_Await.remove(ColorsRoles[i]);
			}
		}
		Reaction_Await.add(Color3);

	}

	else if (reaction.emoji.name === '4️⃣'){

		for (let i = 0; i < ColorsRoles.length; i++) {
			if(Role_Code.has(ColorsRoles[i])){
			Reaction_Await.remove(ColorsRoles[i]);
			}
		}
		Reaction_Await.add(Color4);

	}

	else if (reaction.emoji.name === '5️⃣'){

		for (let i = 0; i < ColorsRoles.length; i++) {
			if(Role_Code.has(ColorsRoles[i])){
			Reaction_Await.remove(ColorsRoles[i]);
			}
		}
		Reaction_Await.add(Color5);

	}

		// Country Roles
		
		//Venezuela Role
			else if (reaction.emoji.name === '🇻🇪'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(VenezuelaRole);

		}

		//Artengina Role
		else if (reaction.emoji.name === '🇦🇷'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(ArgentinaRole);

		}

		//Bolivia Role
		else if (reaction.emoji.name === '🇧🇴'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(BoliviaRole);

		}

		//Colombia Role
		else if (reaction.emoji.name === '🇨🇴'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(ColombiaRole);

		}

				
		//Republica Dominicana Role
		else if (reaction.emoji.name === '🇩🇴'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(RDRole);

		}

	//Ecuador Role
		else if (reaction.emoji.name === '🇪🇨'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(EacuadorRole);

		}

		//España Role
		else if (reaction.emoji.name === '🇪🇸'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(EspañaRole);

		}

		//Chile Role
		else if (reaction.emoji.name === '🇨🇱'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(ChileRole);
	
		}

		//Guatemala Role
		else if (reaction.emoji.name === '🇬🇹'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(GuatemalaRole);
	
		}

		
		//Nicaragua Role
		else if (reaction.emoji.name === '🇳🇮'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(NicaraguaRole);
	
		}
		
		//Honduras Role
		else if (reaction.emoji.name === '🇭🇳'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(HondurasRole);
	
		}

			
		//Mexico Role
		else if (reaction.emoji.name === '🇲🇽'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(MexicoRole);
	
		}

		//Panama Role
		else if (reaction.emoji.name === '🇵🇦'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(PanamaRole);
	
		}

		
		//Peru Role
		else if (reaction.emoji.name === '🇵🇪'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(PeruRole);
	
		}

		
		//Puerto Rico Role
		else if (reaction.emoji.name === '🇵🇷'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(PuertoRRole);
	
		}

		//US Role
		else if (reaction.emoji.name === '🇺🇸'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(USRole);
	
		}
	// Uruguay Role
		else if (reaction.emoji.name === '🇺🇾'){

			for (let i = 0; i < CRoles.length; i++) {
				if(Role_Code.has(CRoles[i])){
				Reaction_Await.remove(CRoles[i]);
				}
			}
			Reaction_Await.add(UruguayRole);
	
		}

			// ElSalvador Role
			else if (reaction.emoji.name === '🇸🇻'){

				for (let i = 0; i < CRoles.length; i++) {
					if(Role_Code.has(CRoles[i])){
					Reaction_Await.remove(CRoles[i]);
					}
				}
				Reaction_Await.add(ElSalRole);
				
			}

				// Costa Rica Role
				else if (reaction.emoji.name === '🇨🇷'){

					for (let i = 0; i < CRoles.length; i++) {
						if(Role_Code.has(CRoles[i])){
						Reaction_Await.remove(CRoles[i]);
						}
					}
					Reaction_Await.add(CRRole);
			
				}


			//	if(reaction.message.member.roles.cache.has("810250008745607198")) {
			
			/* 
				if(reaction.message.guild.members.cache.get(user.id).roles.cache.has("810250008745607198")){
					console.log(`Yay, the author of the message has the role!`);
				  } else {
					console.log(`Nope, noppers, nadda.`);
				  }
		
		
				}**/
				

		 else 
		 {return;}

		

		

	}

	});

	
	client.on('messageReactionRemove', async (reaction, user) =>{
	

		if(user.bot) return;
		if(!reaction.message.guild) return;
		if(reaction.message.channel.id==ChannelIDs.RolesChannelID){
		let Reaction_Await= await reaction.message.guild.members.cache.get(user.id).roles;// with this + .remove or .add you can just add or remove a role from an user

		if(reaction.emoji.id === thiefEmoji){
			await Reaction_Await.remove(ThiefRole);
		}
	 	else if (reaction.emoji.id === hunterEmoji){
		await Reaction_Await.remove(HunterRole);
	}
		else if (reaction.emoji.id === traderEmoji){
		await Reaction_Await.remove(TraderRole);
	}
	
	else if (reaction.emoji.name === '🇻🇪'){
		await Reaction_Await.remove(VenezuelaRole);
	}

	else if (reaction.emoji.name === '🇦🇷'){
		await Reaction_Await.remove(ArgentinaRole);
	}

	else if (reaction.emoji.name === '🇧🇴'){
		await Reaction_Await.remove(BoliviaRole);
	}

	else if (reaction.emoji.name === '🇨🇴'){
		await Reaction_Await.remove(ColombiaRole);
	}

	else if (reaction.emoji.name === '🇨🇷'){
		await Reaction_Await.remove(CRRole);
	}

	else if (reaction.emoji.name === '🇩🇴'){
		await Reaction_Await.remove(RDRole);
	}

	else if (reaction.emoji.name === '🇪🇨'){
		await Reaction_Await.remove(EacuadorRole);
	}

	else if (reaction.emoji.name === '🇪🇸'){
		await Reaction_Await.remove(EspañaRole);
	}

	else if (reaction.emoji.name === '🇨🇱'){
		await Reaction_Await.remove(ChileRole);
	}

	else if (reaction.emoji.name === '🇬🇹'){
		await Reaction_Await.remove(GuatemalaRole);
	}

	else if (reaction.emoji.name === '🇸🇻'){
		await Reaction_Await.remove(ElSalRole);
	}

	else if (reaction.emoji.name === '🇳🇮'){
		await Reaction_Await.remove(NicaraguaRole);
	}

	else if (reaction.emoji.name === '🇭🇳'){
		await Reaction_Await.remove(HondurasRole);
	}

	else if (reaction.emoji.name === '🇲🇽'){
		await Reaction_Await.remove(MexicoRole);
	}

	else if (reaction.emoji.name === '🇵🇦'){
		await Reaction_Await.remove(PanamaRole);
	}

	else if (reaction.emoji.name === '🇵🇪'){
		await Reaction_Await.remove(PeruRole);
	}

	else if (reaction.emoji.name === '🇵🇷'){
		await Reaction_Await.remove(PuertoRRole);
	}

	else if (reaction.emoji.name === '🇺🇸'){
		await Reaction_Await.remove(USRole);
	}

	else if (reaction.emoji.name === '🇺🇾'){
		await Reaction_Await.remove(UruguayRole);
	}

	else if (reaction.emoji.name === '1️⃣'){
		await Reaction_Await.remove(Color1);
	}
	
	else if (reaction.emoji.name === '2️⃣'){
		await Reaction_Await.remove(Color2);
	}
	
	else if (reaction.emoji.name === '3️⃣'){
		await Reaction_Await.remove(Color3);
	}
	
	else if (reaction.emoji.name === '4️⃣'){
		await Reaction_Await.remove(Color4);
	}
	
	else if (reaction.emoji.name === '5️⃣'){
		await Reaction_Await.remove(Color5);
	}
	

	else{ return;}
}
	});




	}


}