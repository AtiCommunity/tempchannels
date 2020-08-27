///////////////////
// TempChannels™ //
///////////////////

const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const {autochannel_name, prefix} = require("./config.json");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
};


client.on("ready", () => {
    const status = [
        `${client.guilds.cache.size} servers | tc/help`,
        `${client.channels.cache.size} channels | tc/help`,
        `${client.users.cache.size} users | tc/help`,
    ];
    var x = 0;


    setInterval(() => {
        client.user.setActivity(status[x], {type: "WATCHING"});
        x = x+1;
        if(x == 3){
            x = 0;
        }
    }, 30000);
    console.log(`INFO: Online on ${client.guilds.cache.size} servers`);
})


client.on("message", message => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    

    if(message.author.bot){
        return;
    }

    if(!message.content.startsWith(prefix) || message.author.bot){
        return;
    }

    if(!client.commands.has(command)){
        return;
    }

    try{
        client.commands.get(command).execute(message, args);
    }

    catch(error){
        message.channel.send("Error : The command was not executed successfully.");
        console.log(`WARNING: ${message.author.username} have found a bug in the system !!! (${command} command)`);
        console.error(error);
    }
})

client.on("voiceStateUpdate", (oldState, newState) => {
    global.joined_user = newState.member;
    global.new_voicechannel_name = newState.channel && newState.channel.name;
    var joined_username = newState.member.user.username;
    var old_voicechannel_name = oldState.channel && oldState.channel.name;
    var server = newState.guild.name;


    if(new_voicechannel_name == autochannel_name){
        newState.guild.channels.create(joined_username, {type: "voice"});
        console.log(`INFO: ${joined_username} created a channel on ${server}.`);
    }
    if(old_voicechannel_name == oldState.member.user.username){
        client.channels.cache.find(channel => channel.name === oldState.member.user.username).delete();
        console.log(`INFO: ${joined_username} deleted a channel on ${server}.`);
    }
})

client.on("channelCreate", channel => {
    var created_channel = channel.id;


    if(new_voicechannel_name == autochannel_name){
        joined_user.voice.setChannel(created_channel);
    }
})

client.login(process.env.TOKEN);
