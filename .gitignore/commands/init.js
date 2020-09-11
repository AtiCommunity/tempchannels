const Discord = require("discord.js");
const {autochannel_category, autochannel_name} = require("../config.json");


module.exports = {
    name: "init",
    execute(message, args) {
        var autochannel_category_finder = message.guild.channels.cache.find(channel => channel.name === autochannel_category);
        var autochannel_name_finder = message.guild.channels.cache.find(channel => channel.name === autochannel_name);

        if(!autochannel_category_finder){
            message.guild.channels.create(`${autochannel_category}`, {
                type: "category",
                position: "1"
            });
            if(!autochannel_name_finder){
                setTimeout(() => {
                    message.guild.channels.create(`${autochannel_name}`, {
                        type: "voice",
                        parent: message.guild.channels.cache.find(channel => channel.name === autochannel_category && channel.type == "category"),
                        position: "1"
                    });
                }, 500);
            }
            message.channel.send("This server was initialised succesfully.")
        }
        else{
            message.reply("This server was already initialised.");
        }
    }
}
