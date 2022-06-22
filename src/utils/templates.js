const getProduct = require('./getProduct')
const ProductInfos = require('../data/ProductInfos')

const templates = {
  confirm: (m) => {
    /* Prevent "*" character */
    const pMessage = m.replace(/\*/g, '')

    const name = pMessage.split(' ')[10] || 'nuevo comprador'
    return {
      message: `¡Hola ${name}! Gracias por su pedido ❤️\n\nSus guantes están listos para ser enviados, solo necesitamos su talla por favor\n\nSi en el pasado ya usó algún tipo de guante podemos usar esa misma talla o si por el contrario no sabe su talla, puede averiguarlo siguiendo las instrucciones dadas en la imagen.\n\nEsperamos su respuesta.`,
      priority: 'urgent',
      media: {
        file: '6282fd1a18cf29beed13a761',
        format: 'native'
      }
    }
  },
  information: (m) => {
    /* Prevent "*" character */
    const pMessage = m.replace(/\*/g, '')

    const product = getProduct(pMessage)

    const PrInfo = ProductInfos[product] || ProductInfos.instacompress

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
