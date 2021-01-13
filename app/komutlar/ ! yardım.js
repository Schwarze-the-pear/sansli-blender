const Discord = require('discord.js');
const db = require('wio.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('709489466913325168') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
       .setColor('RANDOM')
       .setTitle(` **Moderasyon Yardım Menüsüne Hoşgeldiniz** `)
        .setDescription(`
     
                ▬▬▬▬▬▬▬▬ \`\`\Moderasyon Komutları\`\`\ ▬▬▬▬▬▬▬▬
**<a:yldz1:798266144992919602> s!çek ** Etiketlediğiniz kişiyi sesliye çekersiniz.

**<a:yldz1:798266144992919602> s!yavaşmod ** Yavaş Mod ayarlar.

**<a:yldz1:798266144992919602> s!ever-here-engel**  Sunucuda everyone ve here atılmasını engeller.

**<a:yldz1:798266144992919602> s!reklam-engel aç/kapat **  Sunucuda reklam ve linkleri engeller.

**<a:yldz1:798266144992919602> s!avatar**  avatar gösterir

**<a:yldz1:798266144992919602> s!başvuru**  Yetki başvurusu yaparsınız

**<a:yldz1:798266144992919602> s!temizle**  Belirlediğiniz kadar mesaj siler

**<a:yldz1:798266144992919602> s!otorol**  Otorol verir

**<a:yldz1:798266144992919602> s!afk**  AFK olursunuz

**<a:yldz1:798266144992919602> s!sa-as**  sa-as sistemini açar.

**<a:yldz1:798266144992919602> s!jail**  Etiketlediğiniz kişiyi jaile atar

**<a:yldz1:798266144992919602> s!unjail**  Jailden çıkarır

**<a:yldz1:798266144992919602> s!mute**  Etiketlediğiniz kişiyi yazılı kanallarda susturur

**<a:yldz1:798266144992919602> s!unmute**  Kişinin susturmasını açar.

**<a:yldz1:798266144992919602> s!vmute**  Etiketlediğiniz kişiyi sesli kanallarda susturur

**<a:yldz1:798266144992919602> s!ban**  Etiketlediğiniz kişiyi banlar

**<a:yldz1:798266144992919602> s!küfür-engel**  Sunucudaki küfür engellemelerini açar-kapatır

**<a:yldz1:798266144992919602> s!modlog**  Sunucudaki moderasyon kayıtlarını belirlediğiniz kanala gönderir.

**<a:yldz1:798266144992919602> s!çekiliş** Çekiliş Komutlarını gösterir.

**<a:yldz1:798266144992919602> s!nuke ** Yazdığınız kanaldaki bütün mesajları siler.

   `)     
        
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yardım','help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
}
