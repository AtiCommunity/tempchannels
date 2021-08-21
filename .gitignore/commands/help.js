const { MessageEmbed } = require("discord.js");
const { AVC_NC, CREATOR, VERSION } = require("../config.json");

module.exports = {
    name: "help",
    execute(message, args) {
        const intro = new MessageEmbed()
            .setTitle("TempsChannels")
            .setThumbnail("https://i.imgur.com/2KkYW4c.png")
            .setDescription("Create your own temporary channels.")
            .addFields(
                {name: "Version", value: `${VERSION}`},
                {name: "Created by", value: `[${CREATOR[0]}](https://top.gg/user/224466162526715904) and [${CREATOR[1]}](https://top.gg/user/219443996118876161)`}
            )
        const help = new MessageEmbed()
            .setTitle("TempChannels | Help menu")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Logo_TVE-1.svg/1950px-Logo_TVE-1.svg.png")
            .addFields(
                {name: "Discord invite", value: `You already not have invited this bot into your server ? :face_with_monocle: \n Click [here](https://discord.com/api/oauth2/authorize?client_id=731980097946517675&permissions=17001552&scope=bot)`, inline: true},
                {name: "How to use", value: `To use it correcly, you just need to enter the command \"tc/init"\ and join the "${AVC_NC}" channel and it's done. :wink:`, inline: true},
                {name: "Support", value: "If you have something to ask or feedback, go on the support server of the bot [here](https://discord.gg/F3GDHhM).", inline: false},
            )
        const usercmd = new MessageEmbed()
            .setTitle("TempChannels | User commands")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Logo_TVE-2.svg/643px-Logo_TVE-2.svg.png")
            .addField("tc/help", "If you want to see again this menu.", true)
            .addField("tc/init", "To initialize the bot into your server.", true)
            .addFields(
                {name: "tc/help", value: "If you want to see again this menu.", inline: true},
                {name: "tc/init", value: "To initialize the bot into your server.", inline: true}
            )
        message.channel.send({embeds: [intro]});
        message.channel.send({embeds: [help]});
        message.channel.send({embeds: [usercmd]});
    }
}