const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text, usedPrefix, command }) => {
   try{ 
    let [atas, bawah] = text.split`,`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `reply image with command\n\n${usedPrefix + command} <${atas ? atas : 'top text'}>,<${bawah ? bawah : 'bottom text'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} is not supported!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    conn.sendStimg(m.chat, meme, m, { packname: packname, author: author })

}catch(e){
    conn.reply(m.chat,`${e}`)
  conn.reply('120363022211098165@g.us',`ð¨ðµð¼ðµ! ð®ð» ð²ð¿ð¿ð¼ð¿ ð¢ð°ð°ðð¿ð²ð± 

ðð¿ð¿ð¼ð¿ : ${util.format(e)}

  ðð¼ðºðºð®ð»ð± : ${usedPrefix+command}
  
  ð£ð¼ððð¶ð¯ð¹ð² ð¥ð²ð®ðð¼ð»ð :
     â¢ ðð»ðð®ð¹ð¶ð± ð¨ðð®ð´ð² ð¢ð³ ðð¼ðºðºð®ð»ð±
     â¢ ð¦ð²ð¿ðð²ð¿ ðð¿ð¿ð¼ð¿
     â¢ ð¥ðð»ðð¶ðºð² ðð¿ð¿ð¼ð¿ð
     â¢ ðð¿ð¿ð¼ð¿ ð®ð ð±ð²ðð²ð¹ð¼ð½ð²ð¿ð ðð»ð±
     â¢ ðð®ðð® ð¡ð²ððð¼ð¿ð¸ ððððð²ð `, null, {})
  }}
handler.help = ['sá´Éªá´á´á´Êá´á´á´á´  <á´á´xá´>,<á´á´xá´>']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?me(me)?)$/i

handler.limit = false

module.exports = handler
