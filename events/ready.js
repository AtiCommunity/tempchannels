module.exports = (client) => {
    const status = [
        `${client.guilds.cache.size} servers | tc/help`,
        `${client.channels.cache.size} channels | tc/help`,
        // `${client.users.cache.size} users | tc/help`,
        `tc/update available`
    ];
    var x = 0;


    setInterval(() => {
        console.log(x + " " + status[x]);
        if(x <= 1){
            client.user.setActivity(status[x], {type: "WATCHING"});
        }
        else{
            client.user.setActivity(status[x], {type: "PLAYING"});
        }
        if(x == 2){
            x = 0;
        }
        else{
            x++;
        }
    }, 10000);
    console.log(client.guilds.cache.map(guild => `name : ${guild.name} | members : ${guild.memberCount}`));
    console.log(`INFO: Online on ${client.guilds.cache.size} servers.`);
    console.log(`INFO: Logged in as ${client.user.tag} !`);
};