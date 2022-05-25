const ProductInfos = require('../data/ProductInfos')

const templates = {
  confirm: (m) => {
    const name = m.split(' ')[10] || 'nuevo comprador'
    return {
      message: `¡Hola ${name}! Gracias por tu pedido 📦\nPara que los guantes tengan la máxima efectividad, se necesita la *talla correcta*, tómese su tiempo y mida su mano de acuerdo a la imagen por favor.`,
      priority: 'urgent',
      media: {
        file: '6282fd1a18cf29beed13a761',
        format: 'native'
      }
    }
  },
  information: (m) => {
    const product = m.slice((m.indexOf('👉 *') + 4), (m.length - 1))

    const PrInfo = ProductInfos[product]

    return {
      message: PrInfo.message
        ? PrInfo.message +
        '\n\n📦 Si desea adquirirlos necesito estos datos para generar su orden por favor\n\n*Nombre y Apellidos, Teléfono, Ciudad, Departamento, Dirección*' +
        '\n\n💬 Si tiene más preguntas no dude en compartirlas con nosotros por favor'
        : 'En un momento uno de nuestros agentes responderá tus dudas, quédate en linea por favor 🙏',
      media: PrInfo.media || null,
      priority: 'urgent'
    }
  }
}

module.exports = templates
