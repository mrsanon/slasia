let handler = async (m, { usedPrefix}) => {
let credit = `
\t\t\t\t\t\t\t*THANKS TO*

*MRSANON:*
*https://github.com/mrsanon*

*D-3-V-1-L:*
*https://github.com/D-3-V-1-L*

*Toxic-Ajmal:*
*https://github.com/Ajmal-Achu*

*Lord-Official:*
*https://github.com/Lord-official*

*AND MYSELF*
`
 conn.sendTBI(m.chat, credit, wm, 'https://i.pinimg.com/474x/de/bd/b2/debdb24645169bf95eecd49f3144315f.jpg', `SOURCE CODE`, `https://github.com/mrsanon/slasia`, null, null, 'Menu', `${usedPrefix}menu`, null, null, null, null, m) 
}
handler.help = ['credits']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to)$/i

module.exports = handler
