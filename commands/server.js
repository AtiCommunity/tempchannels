const {BOT_ADMINS} = require("../config.json");

module.exports = {
    name: "server",
    execute(message, args)
    {
        var identification = false;
        for(var i = 0; i < BOT_ADMINS.length; i++)
        {
            if(message.author.tag == BOT_ADMINS[i])
            {
                console.log(message.client.guilds.cache.map(guild => `name : ${guild.name} | members : ${guild.memberCount}`));
                message.reply("The command was executed successfully. Check the logs !");
                identification = true;
                break;
            }
        }
        if(identification == false) message.reply("You don't have permission to do this command ! *(you must be an administrator of the bot !)*");
    }
}