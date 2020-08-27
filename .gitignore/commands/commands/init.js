const Discord = require("discord.js");


module.exports = {
    name: "init",
    execute(message, args) {
        var role_finder_on = message.guild.roles.cache.find(role => role.name === "TempChannels - on");
        var role_finder_off = message.guild.roles.cache.find(role => role.name === "TempChannels - off");
        var role_finder = role_finder_on && role_finder_off;
        var server = message.guild.name;


        if(!role_finder){
            if(!role_finder_on){
                 message.guild.roles.create({data: {name: "TempChannels - on", color: "#7F0000"}});
            }
            if(!role_finder_off){
                message.guild.roles.create({data: {name: "TempChannels - off", color: "#007F00"}});
            }
            message.reply("The Bot was initialized.");
            console.log(`Bot: Bot initialized on ${server}'s server.`);
        }
        else{
            message.reply("The Bot was already initialized.");
            return;
        }
    }
}