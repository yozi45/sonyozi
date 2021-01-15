const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send("**🎆 MEME 🎇**").then(message => {
    var nespriler = [
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRbI-UBVeMqkVt62l5lOQl6qp0_OUFYxNbg&usqp=CAU",
   "https://i.redd.it/xvlcjgru64661.jpg",
   "https://images-ext-1.discordapp.net/external/PxRpbsnnq3MbzmVoYppUBQYNC7cHBEBbhU9lgGgAFhk/https/i.redd.it/4va6q21rad661.jpg?width=501&height=498",
   "https://images-ext-1.discordapp.net/external/AZoaaIRaYn2F-1L_NjiDEFkYqrvbqa1ICRnmfy21XlQ/https/i.redd.it/q974wfreri661.png",
   "https://images-ext-1.discordapp.net/external/eXmEFeU5sYlkr5t8CuX1nNnCFd0AF-TuovaE02edFRI/https/i.redd.it/9k5dnsqnn4961.jpg?width=408&height=498",
   "https://images-ext-2.discordapp.net/external/diFCHxqm0Jb4wmATLsTPzUoJlsFgDRQUEVyCIQk-mCA/https/i.redd.it/stf1fjv0wr761.jpg?width=538&height=498",
   "https://images-ext-1.discordapp.net/external/gWw3drFkiLEffQeJSJ-2HVs2-pJcYq3o1WgQeZ7IDqs/https/i.redd.it/s6nr78mdr9861.png?width=406&height=498",
   "https://images-ext-2.discordapp.net/external/8VCkDRDvUooR2bGL8TblLh4L-Q3VftXF9EjrBkhAGt4/https/i.redd.it/nesaq4hsxo861.jpg?width=638&height=498",
   "https://images-ext-1.discordapp.net/external/NwfPQgKVxVAXf5iIYZKvB8h-PZ3TkzC20rYZ_jFKSwI/https/i.redd.it/rfddexgrcp661.jpg?width=568&height=498",
   "https://images-ext-2.discordapp.net/external/hq3FJkEfHP1pBAS4owCnjeTgc4tgY8_05upzv3MpFp0/https/i.redd.it/gih6gq78na661.png?width=499&height=497",
   "https://images-ext-1.discordapp.net/external/RLhWVQMH1XPCqNDv5S-cmMg0Ft4B93_6UBiPrQ0m-_o/https/i.redd.it/d6qbjfhowx861.jpg?width=959&height=498",
   "https://i.pinimg.com/236x/c3/83/90/c3839062c27ea3c8858f57f9ccb947f1.jpg",   
  "https://i.ytimg.com/vi/KkimXl7S4cE/mqdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7FneiiI6mHrmb_jgTrB5nuchR841rZL4JA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRQfyxTZjJwvh5hlCIz0zAxueGj-8lU0zWw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXKiva3mP1gE9JVQqk-K98mop6iK8VdsxpQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwdgcpSLkoF1nhHxjqR3ippMTuvr1PFHzdQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xyshy-2U_IQrLKW-ybJjZ26gWQ_nA41dYQ&usqp=CAU",
  "https://em.wattpad.com/ce571af80bd9af1068a36f1990d17fc0b9924c57/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6d426f6d396e35417a3463366d413d3d2d32362e313463333165313630666533303832363932343036323436343633372e6a7067?s=fit&w=720&h=720",
  
  ];
    var espri = nespriler[Math.floor(Math.random() * nespriler.length)];
    message.edit(`${espri}`);
  });
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "meme",
  description: "Şanslı Sayınızı Bulmaya Çalışır",
  usage: "şanslı sayını tahmin eder"
};