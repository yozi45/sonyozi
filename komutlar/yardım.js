const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT')
.setTimestamp()
.addField('» +eğlence', 'eğlence komutlarını görürsünüz')
.addField('» +çekiliş', 'öekiliş komutlarını görürsünüz')
.addField('» +moderasyon', 'moderasyon komutlarını görürsünz')
.addField('» +ping', 'botun pingini söyler')
.addField('» +destek', 'bir sorunuz olursa bu komutu kullanın bot bana sunucunuzun linkini bana gönderir ben de gelip sorunuzu cevaplarım')
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};