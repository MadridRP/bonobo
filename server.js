const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = "n."

client.on("ready", () => {
   console.log("Encendido");
});
client.on("message", (message) => {
if(message.content.startsWith("ip")) {
   message.channel.send(":hash: La IP del servidor es: 51.75.18.57:30120 o también puedes buscar _Madrid RP_ en la masterlist") };
if(message.content.startsWith("ayuda")){
   message.channel.send("¿Necesitas ayuda? ¡Contacta con algun moderador o en el canal de soporte para que resuelvas tus dudas!")
}
if(message.content.startsWith(prefix+"private2")){
   const embed = new Discord.RichEmbed() 
   .setTitle("INVITACIÓN DEL DISCORD")
    .setColor(0x365EFF)
    .setDescription("Invitación permanente del discord por si quieres invitar a tus amigos y no la encuentras. :)") 
    .setURL("https://www.youtube.com/channel/UCfEpT7Uvrx98cOGn9IDBcYg%22")
    .addField("Invitación", "https://discord.gg/5xpBfNA")
    message.channel.send({embed});

}
});

client.login("NjM1MDc1NDMxMDQ0ODc0MjQw.XasZUg.a-SG8vVV41cm8wIvMhzvO9Fsy_Q")