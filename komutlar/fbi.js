const Discord = require("discord.js")


exports.run = async(client, message, args) => {

    const fbi = new Discord.MessageEmbed()
        .setColor("RED")
        .setImage("https://media1.giphy.com/media/QUY2pzDAKVpX3QacCg/200.gif")
        .setTitle("FBI Open the door!")
    message.channel.send(fbi)
}
/*Menschy*/

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['fbi-gif'],
    permLevel: `Yetki gerekmiyor.`
};

exports.help = {
    name: "fbi",
    description: "FBI gif atar",
    usage: "fbi"
};