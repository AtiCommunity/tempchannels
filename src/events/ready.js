const {VERSION} = require("../config.json");

module.exports = (client) => {    
    var counter = 0;

    setInterval(() => {
        var memberCount = 0;
        
        client.guilds.cache.forEach((guild) => {if (guild.memberCount != NaN) memberCount += guild.memberCount;});

        const status = [
            `${client.guilds.cache.size} servers | tc/help`,
            `${client.channels.cache.filter((channel) => channel.type == "GUILD_CATEGORY").size} categories | tc/help`,
            `${client.channels.cache.filter((channel) => channel.type !== "GUILD_CATEGORY").size} channels | tc/help`,
            `${memberCount-client.guilds.cache.size} users | tc/help`,
            `tc/update`,
            `with channels`
        ];

        if(counter <= 3) client.user.setActivity(status[counter], {type: "WATCHING"});
        else if(counter >= 4 && counter < 5) client.user.setActivity(status[counter], {type: "COMPETING"});
        else client.user.setActivity(status[counter], {type: "PLAYING"});

        if(counter == 5) counter = 0;
        else counter++;
    }, 5000);
    
    console.log(`INFO: Logged in as ${client.user.tag} !`);
    console.log(`INFO: Version : ${VERSION}`);
    console.log(`INFO: Online on ${client.guilds.cache.size} servers.`);
};