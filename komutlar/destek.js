const Discord = require('discord.js')

const ms = require("ms")
const db = require('quick.db')
exports.run = async (client, message, args) => {    
  let cooldown = 8.64e+7, // 24 Saat
        amount = Math.floor(Math.random() * 1000) + 4000;      

    let lastDaily = await db.fetch(`gunluk_${message.guild.id}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));

        
        const embed = new Discord.MessageEmbed()
    .setDescription('acil destek 24 saatte bir kullanılabilir')
            .setColor('RANDOM')
        message.channel.send({embed})
        
    } else {
        const embed = new Discord.MessageEmbed()
  .setTitle('Başarılı  :white_check_mark: ')
.setDescription('**acil destek kullandınız en yakın zamanda kurucum sizin sunucunuza gelecek ve sorunu düzeltecek**')
        .setColor('GREEN')
 message.channel.send(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed = new Discord.MessageEmbed()
      .addField(`Birisi Acil Destek Kullandı!!`, invite.url, true)
            .setColor('RANDOM')
      .setThumbnail(message.guild.iconURL)
      client.channels.cache.get('796316415086952489').send(embed)
    db.set(`gunluk_${message.guild.id}`, Date.now());
        })}
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['acil-destek, acil destek, acildestek'],
    permLevel: 0
}

exports.help = {
    name: 'destek',
    description: 'Sunucunuzu Tanıtır.',
    usage: 'acil destek'
}
