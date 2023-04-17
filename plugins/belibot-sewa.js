var fetch = require("node-fetch");
var handler = async (m, { 
 conn,
 text,
 usedPrefix,
 command
 }) => {
var gh = 'https://github.com/JarPyth'
  let buttonMessage= {
'document':{'url':gh},
'mimetype':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName':'Payment Method',
'fileLength':'99999999999999',
'pageCount':'999',
'contextInfo':{
'externalAdReply':{
'showAdAttribution': true, 
'mediaUrl':gh,
'mediaType':2,
'previewType':'pdf',
'title':'Follow My Github',
'body':'© JarspBot',
'thumbnail':await(await fetch('https://telegra.ph/file/47020046e1e3e365a3764.jpg')).buffer(),
'sourceUrl':gh}},
'caption':'Hi, Silahkan pilih opsi di bawah ini.\n*Payment*\n\n*x* Dana/Gopay: 082148864989\n*x* Pulsa: 082148864989',
'footer':'© Jarspy',
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}

handler.help = ['sewa'];
handler.tags = ['main'];
handler.command = ['sewa', 'sewabot', 'belibot'];
module.exports = handler;
