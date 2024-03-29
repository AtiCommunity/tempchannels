const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "update",
    execute(message, args)
    {
        const updateNotes = new MessageEmbed()
            .setTitle("TempChannels | Update notes")
            .setColor("#863cef")
            .setThumbnail("https://i.imgur.com/Mx2FDp2.png")
            .addFields(
                {name: "**Latest update [22.05.28]**", value: `- Clean the code.
                                                               - Upgrade work to delete channels.`},
                {name: "\u200B", value: "\u200B"},
                {name: "**Update [22.03.02]**", value: `- Fix bot crash when a user leave channel to fast.
                                                        - Change the time before move the user into a channel to be sure you don't leave before the move and crash the bot.`},
                {name: "**Update [21.08.23]**", value: `- Help command has been updated again with one more information about source code.
                                                        - Update command has been updated with a space to see the latest update even better.
                                                        - A new category calculator in the bot activity.`},
                {name: "**Update [21.08.22]**", value: `- Help command has been updated with more informations about the bot.
                                                        - tc/update added to see update notes.`},
                {name: "**Update [21.08.21]**", value: `- Reduced the time at 1000ms to create a temporary channel to have more chance to be moved in the channel if you are lagging.
                                                        - The bot is now using the last version of discord.js and node.js.`},
            )
        message.channel.send({embeds: [updateNotes]});
    }
}
