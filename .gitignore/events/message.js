const { PREFIX } = require("../config.json");

module.exports = (client, message) => {
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    try{
        client.commands.get(command).execute(message, args);
    }

    catch(error){
        message.reply("The command was not executed successfully or the command is unknown.");
        console.error(error);
    }
    
    console.log(`INFO: ${message.author.tag} used the command ${command}.`);
};