const getProduct = require('./getProduct')
const ProductInfos = require('../data/ProductInfos')

const templates = {
  confirm: (m) => {
    const name = m.split(' ')[10] || 'nuevo comprador'

    return {
      image: 'https://i.ibb.co/4frCdJW/tallas.png',
      caption: `*¡Hola ${name}! Gracias por su pedido* ❤️\n\nSus guantes están listos para ser enviados, *solo necesitamos su talla* por favor\n\nSi en el pasado ya usó algún tipo de guante *podemos usar esa misma talla* o si por el contrario no sabe su talla, puede averiguarlo siguiendo las instrucciones dadas en la imagen.\n\nEsperamos su respuesta.`
    }
  },
  information: (m) => {
    const product = getProduct(m)

    const PrInfo = ProductInfos[product] || ProductInfos.instacompress

    return {
      caption:
        '👋 Hola un gusto saludarle, soy el *Dr. Sergio Beleño Zapata*\n\n' +
        PrInfo.caption +
        '\n\n👨‍⚕️ *Estoy aquí para resolver todas sus dudas.*\n\n¿En que puedo ayudarle?',
      image: PrInfo.image
    }
  }
}

module.exports = templates
