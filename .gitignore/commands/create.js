const Discord = require("discord.js");

module.exports = {
    name: "create",
    execute(message, args){
        var channel_name = message.author.username;
        var role_finder_on = message.guild.roles.cache.find(role => role.name === "TempChannels - on");
        var role_finder_off = message.guild.roles.cache.find(role => role.name === "TempChannels - off");
        var role_finder = role_finder_on && role_finder_off;
        var server = message.guild.name;


        if(!role_finder){
            message.reply("The bot was not initialized. Please write tc/init to init it.");
            return;
        }

        else{
            if(message.member.roles.cache.find(role => role.name === "TempChannels - on")){
                message.reply("Your channel was already created.");
            }

            else{
                message.guild.channels.create(`${channel_name}`, {type: "voice"});
                message.reply("Your channel was created.");
                
                message.member.roles.add(role_finder_on.id);
                message.member.roles.remove(role_finder_off.id);
                console.log(`Bot: ${channel_name}'s channel was created on ${server}'s server.`);
            }
        }
    }
}