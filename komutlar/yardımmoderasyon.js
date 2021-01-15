const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT')
.setTimestamp()
.addField('» +mute', 'Tempmute atarsınız')
.addField('» +unmute', 'mute açarsınız')
.addField('» +muterololuştur', 'muteli rolü oluşturur')
.addField('» +muterol', 'mute atması için muteli rolü tanımlarsınız')
.addField('» +rol-ver', 'etiketlediğiniz kullanıcıya etiketlediğiniz rolü verirsiniz')
.addField('» +sil', 'yazdığınız sayıda mesaj silersiniz')
.addField('» +sunucu', 'sunucunuz hakkında bilgi verir')
.addField('» +sunucukur', 'güzel bir sunucu kurar')
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
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};