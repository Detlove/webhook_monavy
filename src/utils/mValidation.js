const mValidation = (m) =>
  m.includes('Hola, deseo confirmar mi pedido por favor')
    ? 'confirm'
    : m.includes('Hola, deseo más información sobre') &&
      'information'

module.exports = mValidation
