const {COMMANDS, PREFIX} = require("../config.json");

module.exports = (client, message) => {
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    console.log(`INFO: ${message.author.tag} used the command ${command}.`);
    
    identification(command);

    function identification(command)
    {
        var identification;

        for(var i=0; i<COMMANDS.length; i++)
        {
            if(command == COMMANDS[i])
            {
                identification = true;
                break;
            }
            else identification = false;
        }

        if(identification == true)
        {
            try
            {
                client.commands.get(command).execute(message, args);
            }
        
            catch(error)
            {
                message.reply("The command was not executed successfully.");
                console.error(error);
            }
        }
        else message.reply("Unknow command.");
    }
};


