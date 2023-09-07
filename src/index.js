const messages = [
    "¿Eres Africana, Amanda?",
    "¿Permito peinados así en mi escuela?",
    "¿Tu mami?, ¡Es una tonta!",
    "Tú estás muy enana, ¡Crece ya!",    
    "Yo soy grande, tú pequeña",
    "Yo soy lista, tú tonta",
    "Yo estoy bien, tú estás mal",
    "Eso no lo cambiarás nunca",
    "¡¡¡AHHH, CARNE FRESCA!!!",
    "¿PERO..?, ¿¿¿¿DIJISTE PERO????",
    "¡HOY SE VAN A MORIR ALGUNAS RATAS!",
    "¡Todos los niños son un error!",
    "No puedo ni por mi vida entender por qué los niños tienen que tardar tanto en crecer. ",
    "¡Cuando termine contigo te verás como animal atropellado",
    "No podrías deletrear «DIFICULTAD» ni aunque tu vida dependiera de ello",
    "Usa la vara, golpea al niño; ése es mi lema",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };