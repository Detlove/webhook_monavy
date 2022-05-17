const templates = {
  confirm: (name) => {
    return {
      message: `¡Hola ${name}! Gracias por tu pedido 📦\nPara que los guantes tengan la máxima efectividad, se necesita la *talla correcta*, tómese su tiempo y mida su mano de acuerdo a la imagen por favor.`,
      priority: 'urgent',
      media: {
        file: '6282fd1a18cf29beed13a761',
        format: 'native'
      }
    }
  },
  information: () => {
    return {
      message: 'Claro que sí, los guantes están fabricados de *60%* Algodón, *33%* Poliéster y *7%* Elastano de grado médico, son lavables y su precio es de $59,900 pesos colombianos\n\n💬 Si tiene más preguntas no dude en compartirlas con nosotros por favor',
      priority: 'urgent',
      media: {
        file: '628312c211023a7b1e0c2735',
        format: 'native'
      }
    }
  }
}

module.exports = templates
