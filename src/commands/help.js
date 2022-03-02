const {MessageEmbed} = require("discord.js");
const {AVC_NC, CREATOR, DISCORDJS_VERSION, NODEJS_VERSION, VERSION} = require("../config.json");

module.exports = {
    name: "help",
    execute(message, args)
    {
        const intro = new MessageEmbed()
            .setTitle("TempsChannels")
            .setColor("#863cef")
            .setThumbnail("https://i.imgur.com/Mx2FDp2.png")
            .setDescription("Create your own temporary channels.\n *Free For Ever !* :wink:")
            .addFields(
                {name: "Source Code", value: `[Click here](https://github.com/Atineon/TempChannels)`, inline: true},
                {name: "Discord.js", value: `${DISCORDJS_VERSION}`, inline: true},
                {name: "Node.js", value: `${NODEJS_VERSION}`, inline: true},
                {name: "Version", value: `${VERSION}`, inline: true},
                {name: "Created by", value: `[${CREATOR[0]}](https://top.gg/user/224466162526715904)`, inline: true}
            )
        const usercmd = new MessageEmbed()
            .setTitle("TempChannels | User commands")
            .setColor("#863cef")
            .setThumbnail("https://i.imgur.com/fopKy0r.png")
            .addFields(
                {name: "tc/help", value: "If you want to see again this menu.", inline: true},
                {name: "tc/init", value: "To initialize the bot into your server.", inline: true},
                {name: "tc/update", value: "To see the update notes.", inline: true}
            )
        const help = new MessageEmbed()
            .setTitle("TempChannels | Help menu")
            .setColor("#863cef")
            .setThumbnail("https://i.imgur.com/UOLqCUh.png")
            .addFields(
                {name: "Discord invite", value: `You already not have invited this bot into your server ? :face_with_monocle: \n [Click here](https://discord.com/api/oauth2/authorize?client_id=731980097946517675&permissions=17001552&scope=bot) to invite the bot. :smile:`, inline: true},
                {name: "How to use", value: `To use it correcly, you just need to enter the command \"tc/init"\ and join the "${AVC_NC}" channel and it's done. :wink:`, inline: true},
                {name: "Support", value: "If you have something to ask or feedback, go on the support server of the bot [Click here](https://discord.gg/F3GDHhM).", inline: false},
            )
        message.channel.send({embeds: [intro, usercmd, help]});
    }
}