const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.BOT_TOKEN);

bot.on("ready", message => {
console.log(`Logged in as ${bot.user.tag}`)
});

bot.on("guildMemberAdd", member => {
	if (member.guild.id !== "371471273278308373") return;
	const channel = bot.channels.get("376502657927348225")
	const role = member.guild.roles.find("name", "User")
	member.addRole(role)
	var embed = new Discord.RichEmbed()
	.setTitle(`Hello ${member.user}! :wave:`)
	.setColor("RANDOM")
	.setThumbnail(member.user.displayAvatarURL)
	.setTimestamp()
	.addField("Welcome to Snap JS Offical!", "Enjoy your stay!")
  channel.send({ embed: embed });
	});
  
  bot.on("guildMemberRemove", member => {
  	if (member.guild.id !== "371471273278308373") return;
	const channel = bot.channels.get("376502657927348225")
	var embed = new Discord.RichEmbed()
	.setTitle(`Goodbye ${member.user.tag}! :cry:`)
	.setColor("RANDOM")
	.setThumbnail(member.user.displayAvatarURL)
	.setTimestamp()
	.addField(`${member.user.tag} has left...`, "Goodbye... see you soon!")
  channel.send({ embed: embed });
	});
