let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let saweria = global.saweria
let owner = global.owner
let anu = `Hallo mypren 👋
━━━〔 ıll *Sewa Bot* llı 〕━━ꕥ
━━━━━━━━━━━━━━━━━━━━
━━━〔 ıll *HARGA* llı 〕━━ꕥ
         *PROMO*
⬡ *1 MINGGU:* *3.000*
⬡ *1 BULAN:* *5.000*
⬡ *PERMANENT:* *7.000*
┗━━━━━━━━━━━━━━━ꕥ
┏━━━〔 ıll *PAYMENT* llı 〕━━ꕥ
⬡ *DANA:* '6285730794089'
⬡ *PULSA:* '6285730794089'
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━〔 ıll *RULES* llı 〕━ꕥ
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
┗━━━━━━━━━━ꕥ
Jika anda berminat hubungi nomor di bawah!!

⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot

Contact person Sewa Bot:
wa.me/${6285730794089} (Owner)

*Follow Instagram ku juga kak😼*`
  conn.send3ButtonImg(m.chat, fla + teks, anu, instagram, '𝚂𝚎𝚖𝚞𝚊 𝙿𝚎𝚛𝚒𝚗𝚝𝚊𝚑', '.allmenu', '𝙶𝚛𝚘𝚞𝚙 𝙱𝚘𝚝', '.gcbot', '𝙳𝚘𝚗𝚊𝚜𝚒 𝙺𝚊𝚔', '.donasi', m) 
}
handler.help = ['sewaoscar']
handler.tags = ['info']
handler.command = /^(sewa|sewaoscar|sewa|sewabot)$/i

module.exports = handler
