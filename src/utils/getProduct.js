const getProduct = (m) => {
  if (m.includes('InstaCompress®')) {
    return 'instacompress'
  }

  return false
}

module.exports = getProduct
