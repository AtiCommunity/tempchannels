const { PREFIX } = require("../config.json");

module.exports = (client, message) => {
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    console.log(`INFO: ${message.author.tag} used the command ${command}.`);

    if(command == "help" || command == "init"){
        try{
            client.commands.get(command).execute(message, args);
        }
    
        catch(error){
            message.reply("The command was not executed successfully.");
            console.error(error);
        }
    }
    else{
        message.reply("unknown command.");
    }
};