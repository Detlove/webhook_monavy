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
    const iPr = m.indexOf('👉 *')
    const product = m.slice((iPr + 4), (m.length - 1))

    return {
      message:
      ProductInfos[product]
        ? ProductInfos[product] + '\n\n💬 Si tiene más preguntas no dude en compartirlas con nosotros por favor'
        : 'No info yet',
      priority: 'urgent',
      media: {
        file: '628312c211023a7b1e0c2735',
        format: 'native'
      }
    }
  }
}

module.exports = templates
