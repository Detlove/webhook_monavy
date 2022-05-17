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
      message: 'Claro que sí, los guantes estan fabricados de 60% Algodón, 33% Poliéster y 7% Elastano de grado médico, perfectos para aliviar el dolor causado por las artritis, son lavables y su precio es de $59,900 pesos colombianos\nSi desea pedirlos, necesitamos la siguiente información por favor: Nombre y Apellidos, Teléfono, Departamento, Ciudad, Dirección y Talla'
    }
  }
}

module.exports = templates
