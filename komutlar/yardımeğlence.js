const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LORDOZİBOT')
.setTimestamp()
.addField('» +avatar', 'avatarınızı atar')
.addField('» +bilgi', 'ilginç bir bilgi öğrenirsiniz')
.addField('» +sorusor', 'yazdığınız souya bot cevap verir')
.addField('» +şanslısayım', 'şanslı sayınızı söyler')
.addField('» +oylama', 'oylama başlatırsınız')
.addField('» +düello', 'etiketlediğiniz kişi ile düello yaparsınız')
.addField('» +balıktut', 'balık tutarsın')
.addField('» +fbi', 'fbi çağırırsınız')
.addField('» +meme', 'bot meme atar')
.addField('» +covid', 'virüs ile ilgili verilere erişirsiniz')
.addField('» +başarım', 'yazdığınız şeyi mc başarımı haline çevirir')
.addField('» +mcskin', 'yazdığınız kullanıcının skinini gönderir')
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};