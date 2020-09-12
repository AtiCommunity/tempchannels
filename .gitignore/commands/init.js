const Discord = require("discord.js");
const {autochannel_category, autochannel_buggedchannel, autochannel_ncchannel,} = require("../config.json");


module.exports = {
    name: "init",
    execute(message, args) {
        var autochannel_category_finder = message.guild.channels.cache.find(channel => channel.name === autochannel_category);
        var autochannel_ncchannel_finder = message.guild.channels.cache.find(channel => channel.name === autochannel_ncchannel);
        var autochannel_buggedchannel_finder = message.guild.channels.cache.find(channel => channel.name === autochannel_buggedchannel);

        if(!autochannel_category_finder){
            message.guild.channels.create(`${autochannel_category}`, {
                type: "category",
                position: "1"
            });
            if(!autochannel_buggedchannel_finder){
                setTimeout(() => {
                    message.guild.channels.create(`${autochannel_buggedchannel}`, {
                        type: "voice",
                        parent: message.guild.channels.cache.find(channel => channel.name === autochannel_category && channel.type == "category"),
                        position: "1"
                    });
                }, 500);
            }
            if(!autochannel_ncchannel_finder){
                setTimeout(() => {
                    message.guild.channels.create(`${autochannel_ncchannel}`, {
                        type: "voice",
                        parent: message.guild.channels.cache.find(channel => channel.name === autochannel_category && channel.type == "category"),
                        position: "2"
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
