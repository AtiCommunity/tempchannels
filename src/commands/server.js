module.exports = {
    name: "server",
    execute(message, args)
    {
        if(message.author.tag == "Atineon#2652")
        {
            console.log(message.client.guilds.cache.map(guild => `name : ${guild.name} | members : ${guild.memberCount}`));
            message.reply("The command was executed successfully. Check the logs !");
        }
        else message.reply("You don't have permission to do this command ! *(you must be an administrator of the bot !)*");
    }
}