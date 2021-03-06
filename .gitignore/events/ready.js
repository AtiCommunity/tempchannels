module.exports = (client) => {
    const status = [
        `${client.guilds.cache.size} servers | tc/help`,
        `${client.channels.cache.size} channels | tc/help`,
        `${client.users.cache.size} users | tc/help`
    ];
    var x = 0;


    setInterval(() => {
        client.user.setActivity(status[x], {type: "WATCHING"});
        x = x+1;
        if(x == 3){
            x = 0;
        }
    }, 30000);
    console.log(client.guilds.cache.map(r => `name : ${r.name} | members : ${r.memberCount}`));
    console.log(`INFO: Online on ${client.guilds.cache.size} servers`);
    console.log(`Logged in as ${client.user.tag}!`);
};