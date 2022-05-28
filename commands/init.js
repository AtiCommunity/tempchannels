const {AVC_CATEGORY, AVC_NC} = require("../config.json");

module.exports = {
    name: "init",
    execute(message, args)
    {
        var AVC_categoryFinder = message.guild.channels.cache.find(channel => channel.name === AVC_CATEGORY && channel.type == "GUILD_CATEGORY");
        var AVC_NCFinder = message.guild.channels.cache.find(channel => channel.name === AVC_NC && channel.type == "voice");

        if(message.member.permissions.has("ADMINISTRATOR"))
        {
            if(!AVC_categoryFinder)
            {
                message.guild.channels.create(AVC_CATEGORY, {type: "GUILD_CATEGORY"});
                setTimeout(() => {
                    if(!AVC_NCFinder)
                    {
                        message.guild.channels.create(AVC_NC, {
                            type: "GUILD_VOICE",
                            parent: message.guild.channels.cache.find(channel => channel.name === AVC_CATEGORY && channel.type == "GUILD_CATEGORY"),
                            position: 2
                        });
                        message.reply("This server was initialised succesfully.");
                    }
                }, 500);
            }
            else message.reply("This server was already initialised. *(If you have any problems, delete all channels + category and try it again.)*");
        }
        else message.reply("You don't have permission to do this command ! *(you must be an administrator !)*");
    }
}