///////////////////
// TempChannels™ //
///////////////////

const Discord = require("discord.js");
const fs = require("fs");
const {prefix, token} = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.on("ready", () => {
    client.user.setActivity("tc/create", {type: "WATCHING"});
    console.log("Bot: Online !");
});


client.on("guildMemberAdd", member => {
    var autorole = member.guild.roles.cache.find(role => role.name === "TempChannels - off");


    member.roles.add(autorole);
    console.log(`Bot: New role asigned to ${member.user.username}.`)
});


client.on("message", message => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(message.author.bot) return

    if(!message.content.startsWith(prefix) || message.author.bot) return

    if(!client.commands.has(command)) return

    
    try{
        client.commands.get(command).execute(message, args);
    }

    catch(error){
        console.error(error);
        message.channel.send("Error : The Command was not executed successfuly.");
    }
});

client.login(process.env.TOKEN);
