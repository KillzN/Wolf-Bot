

const handler = async (m, {conn, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.info_groupsofc

  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `${tradutor.texto1[0]}

${tradutor.texto1[1]}
1.- www.instagram.com/_lobit0

2.- www.instagram.com/_lobit0

3.- www.instagram.com/_lobit0

4.- www.instagram.com/_lobit0

> Lobito Store OFC :

1.- www.instagram.com/_lobit0

2.- www.instagram.com/_lobit0`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/Lobito`},
    'mimetype': `application/${document}`,
    'fileName': `${tradutor.texto2}`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/LobitoD',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': `${tradutor.texto3}`,
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.youtube.com/channel/UCYh9X3YvgpJLJTb5Z4cE9Ig'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
