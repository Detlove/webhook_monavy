const templates = {
  confirm: (m) => {
    const name = m.split(' ')[10] || 'nuevo comprador'

    if (m.includes('InstaCompress®')) {
      return {
        image: 'https://i.ibb.co/4frCdJW/tallas.png',
        caption: `*¡Hola ${name}! Gracias por su pedido* ❤️\n\nSus guantes están listos para ser enviados, *solo necesitamos su talla* por favor\n\nSi en el pasado ya usó algún tipo de guante *podemos usar esa misma talla* o si por el contrario no sabe su talla, puede averiguarlo siguiendo las instrucciones dadas en la imagen.\n\nEsperamos su respuesta.`
      }
    }

    if (m.includes('Cuchara Medidora Inteligente con Pantalla LCD')) {
      return {
        image: 'https://i.ibb.co/pRzrV6B/gracias.jpg',
        caption: `Perfecto ${name}, su pedido ha sido confirmado 🎉\n\nEl tiempo estimado de llegada es de 2 a 4 días hábiles (lunes a sábado) desde que parte de nuestro almacén\n\nSi tiene alguna pregunta no dude en compartirla con nosotros.`
      }
    }

    return false
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
    }

    return false
  }
}

module.exports = templates
