const mValidation = (m) =>
  m.includes('Hola, quiero confirmar mi pedido por favor')
    ? 'confirm'
    : m.includes('Hola, deseo más información sobre los guantes por favor') &&
      'information'

module.exports = mValidation
