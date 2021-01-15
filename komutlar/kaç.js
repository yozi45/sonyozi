const Discord = require("discord.js")////narcosCode 
exports.run = (bot, message) => {
  const guildArray = bot.guilds.cache.array()
  while (guildArray.length) {
    const embed = new Discord.MessageEmbed();

    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.setColor('RANDOM')
      embed.setTitle(':white_check_mark: Sunucular')
      embed.setDescription(`**${bot.guilds.cache.size}** tane sunucu beni eklemiş !`)
    }
    message.channel.send({embed: embed});////narcosCode 
  } 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kacsunucu'],
  permLevel: 4,
};////narcosCode yapımcı Noithres#1139

exports.help = {
  name: "kaçsunucu",
  description: "Botun kaç sunucuda olduğunu gösterir",
  usage: "kaçsunucu"
};////narcosCode yapımcı Noithres#1139