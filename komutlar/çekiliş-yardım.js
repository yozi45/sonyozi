const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Çekiliş Komutları")
 .setTimestamp()
.setDescription("+çekiliş-yap = Çekiliş yapmanızı sağlar.\n +çekiliş-bitir = Yaptığınız çekiliş süresi dolmadan bitirir. \n +çekiliş-düzenle = Başlattığınız çekilişte düzenlemeler yapmaya yarar. \n +çekiliş-liste = Yaptığınız çekilişleri listeler. \n +reroll = Çekiliş kazananı tekrar seçer.")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['çekiliş-yardım'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'çekiliş',
  category: 'yönetici',
  description: 'Yardım Menüsü.',
   usage:'+çekiliş'
}