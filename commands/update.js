const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "update",
    execute(message, args) {
        const update_notes = new MessageEmbed()
            .setTitle("TempChannels | Update notes")
            .setColor("#863cef")
            .setThumbnail("https://i.imgur.com/Mx2FDp2.png")
            .addFields(
                {name: "**Latest update [21.08.22]**", value: `- Help command has been updated with more informations about the bot.
                                                               - tc/update added to see update notes.`},
                {name: "**Update [21.08.21]**", value: `- Reduce the time at 1000ms to create a temporary channel to have more chance to be moved in the channel if you are lagging.
                                                        - The bot is now using the last version of discord.js and node.js.`},
            )
        message.channel.send({embeds: [update_notes]});
    }
}
