const templates = {
  confirm: (m) => {
    const name = m.split(' ')[10] || 'nuevo comprador'

    return {
      image: 'https://i.ibb.co/4frCdJW/tallas.png',
      caption: `*¡Hola ${name}! Gracias por su pedido* ❤️\n\nSus guantes están listos para ser enviados, *solo necesitamos su talla* por favor\n\nSi en el pasado ya usó algún tipo de guante *podemos usar esa misma talla* o si por el contrario no sabe su talla, puede averiguarlo siguiendo las instrucciones dadas en la imagen.\n\nEsperamos su respuesta.`
    }
  },
  information: (m) => {
    if (m.includes('InstaCompress®')) {
      return {
        image: 'https://i.ibb.co/z7hnPbg/waimage.jpg',
        caption: '👋 Hola un gusto saludarle, soy el *Dr. Sergio Beleño Zapata*\n\nLos guantes están fabricados de *80%* microfibra de bambú + *20%* elastano de grado médico.\n\nPerfectos para aliviar el dolor causado por artritis o túnel carpiano, el precio es de *$69,900* pesos colombianos.\n\n👨‍⚕️ *Estoy aquí para resolver todas sus dudas.*\n\n¿En que puedo ayudarle?'
      }
    }

    if (m.includes('cuchara medidora inteligente')) {
      return {
        image: 'https://i.ibb.co/MNsPwq3/cuchara-inte.jpg',
        caption: '👋 Hola un gusto saludarle, soy Clara\n\nLa *Cuchara Medidora Inteligente con Pantalla LCD* es la herramienta ideal con un margen de error mínimo que hará que cocinar postres y elaboradas preparaciones sea pan comido, el precio es de *$59,900* pesos colombianos.\n\n 👩🏻‍🦱 *Estoy aquí para resolver todas sus dudas.*\n\n¿En que puedo ayudarle?'
      }
    } else {
      return {
        image: 'https://i.ibb.co/z7hnPbg/waimage.jpg',
        caption: 'Información aún no disponible'
      }
    }
  }
}

module.exports = templates
