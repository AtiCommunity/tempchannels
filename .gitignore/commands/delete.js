const Discord = require("discord.js");

module.exports = {
    name: "delete",
    execute(message, args){
        var channel_name = message.author.username;
        var role_finder_on = message.guild.roles.cache.find(role => role.name === "TempChannels - on");
        var role_finder_off = message.guild.roles.cache.find(role => role.name === "TempChannels - off");
        var role_finder = role_finder_on && role_finder_off;
        var server = message.guild.name;


        if(!role_finder){
            message.reply("The Bot was not initialized. Please write tc/init to initiate it.");
            return;
        }

        else{
            if(message.member.roles.cache.find(role => role.name === "TempChannels - off")){
                message.reply("You have not created a channel.");
            }

            else{
                message.guild.channels.cache.find(channel => channel.name === `${channel_name}`).delete();
                message.reply("Your channels were deleted.");

                message.member.roles.add(role_finder_off.id);
                message.member.roles.remove(role_finder_on.id);
                console.log(`Bot: The ${channel_name}'s channel was deleted on ${server}'s server.`);
            }
        }
    }
}