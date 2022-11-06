let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
「 Suport Bot Dengan Cara donasi 」

⫹⫺ Via Gopay : 6285730794089
⫹⫺ Via Dana : 6281241056195
⫹⫺ Via Saweria : https://saweria.co/gilzzbotz


`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
