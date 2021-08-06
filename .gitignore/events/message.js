const { COMMANDS, PREFIX } = require("../config.json");

module.exports = (client, message) => {
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();
    var command_size = COMMANDS.length;

    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    console.log(`INFO: ${message.author.tag} used the command ${command}.`);

    for(var i = 0; i < command_size; i++){
        if(command == COMMANDS[i]){           
            try{
                client.commands.get(command).execute(message, args);
            }
        
            catch(error){
                message.reply("The command was not executed successfully.");
                console.error(error);
            }
            break;
        }
        else{
            message.reply("unknown command.")
            break;
        }
    }
};