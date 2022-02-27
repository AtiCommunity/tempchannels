const { VERSION } = require("../config.json");

module.exports = (client) => {    
    var x = 0;

    setInterval(() => {
        var memberCount = 0;
        
        client.guilds.cache.forEach((guild) => {
            if (guild.memberCount != NaN) {
                memberCount += guild.memberCount;
            }
        });

        const status = [
            `${client.guilds.cache.size} servers | tc/help`,
            `${client.channels.cache.filter((channel) => channel.type == "GUILD_CATEGORY").size} categories | tc/help`,
            `${client.channels.cache.filter((channel) => channel.type !== "GUILD_CATEGORY").size} channels | tc/help`,
            `${memberCount} users | tc/help`,
            `tc/update available`
        ];

        if(x <= 3){
            client.user.setActivity(status[x], {type: "WATCHING"});
        }
        else{
            client.user.setActivity(status[x], {type: "PLAYING"});
        }
        if(x == 4){
            x = 0;
        }
        else{
            x++;
        }
    }, 10000);
    console.log(client.guilds.cache.map(guild => `name : ${guild.name} | members : ${guild.memberCount}`));
    console.log(`INFO: Online on ${client.guilds.cache.size} servers.`);
    console.log(`INFO: Version : ${VERSION}`);
    console.log(`INFO: Logged in as ${client.user.tag} !`);
};