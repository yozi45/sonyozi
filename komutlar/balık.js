const Discord = require('discord.js');

const client = new Discord.Client();



exports.run = (client, message) => {

    message.channel.send('Balık tuttun balığı çekiyorsun.').then(message => {

        var baliklar = ['``Sazan tuttun!`` :fish:', '``Köpek balığı tuttun iyi para eder.``', '``Uskumru tuttun!`` :fish:', '``Mezgit tuttun! Havyarıda var hee`` :) :fish:', '``Japon balığı tuttun yemeyi düşünmüyorsun herhalde?``', '``Hamsi tuttun!`` :fish:', '``Levrek tuttun!`` :fish:', '``Hiçbir şey tutamadın maalesef!`` :wastebasket:', '``Alabalık tuttun!`` :fish:', '``Maalesef balık oltadan kaçtı!`` :wastebasket:', '``İstavrit tuttun!`` :fish:'];

        var balik = baliklar[Math.floor(Math.random() * baliklar.length)];

        message.edit(`${balik}`); /*Menschy*/

    });

}



exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ['balık', 'balıktut', 'balık-tut'],

    permLevel: 0

};
/*Menschy*/


exports.help = {

    name: 'balıktut',

    description: 'Balık Tutarsın.',

    usage: 'balıktut'

};