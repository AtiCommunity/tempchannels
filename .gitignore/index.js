///////////////////
// TempChannels™ //
///////////////////

const Discord = require("discord.js");
const fs = require("fs");
const {prefix} = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.on("ready", () => {
    const status = [
        `${client.guilds.cache.size} servers | tc/create`,
        `${client.channels.cache.size} channels | tc/create`,
        `${client.users.cache.size} users | tc/create`,
    ];
    var x = 0;


    setInterval(() => {
        client.user.setActivity(status[x], {type: "WATCHING"});
        x = x+1;
        if(x == 3){
            x = 0;
        }
    }, 30000)
    console.log(`Bot: Online on ${client.guilds.cache.size} servers`);
});


client.on("guildMemberAdd", member => {
    var autorole = member.guild.roles.cache.find(role => role.name === "TempChannels - off");


    member.roles.add(autorole);
    console.log(`Bot: New role assigned to ${member.user.username}.`)
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
        message.channel.send("Error : The command was not executed successfully.");
    }
});

client.login(process.env.TOKEN);
