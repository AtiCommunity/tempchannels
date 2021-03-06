const { Client, GuildMember } = require("discord.js");
const { AVC_CATEGORY, AVC_NC } = require("../config.json");

module.exports = {
    name: "init",
    execute(message, args) {
        var avc_category_finder = message.guild.channels.cache.find(channel => channel.name === AVC_CATEGORY && channel.type == "category");
        var avc_nc_finder = message.guild.channels.cache.find(channel => channel.name === AVC_NC && channel.type == "voice");

        if(message.member.hasPermission("ADMINISTRATOR")){
            if(!avc_category_finder){
                message.guild.channels.create(AVC_CATEGORY, {
                    type: "category",
                });
                if(!avc_nc_finder){
                    setTimeout(() =>{
                        message.guild.channels.create(AVC_NC, {
                            type: "voice",
                            parent: message.guild.channels.cache.find(channel => channel.name === AVC_CATEGORY && channel.type == "category"),
                            position: 2
                        });
                    }, 500);
                    message.reply("This server was initialised succesfully.");
                }
                else return;
            }
            else message.reply("This server was already initialised. *(If you have any problems, delete all channels + category and try it again.)*");
        }
        else message.reply("You don't have permission to do this command ! *(you must be an administrator !)*");
    }
}