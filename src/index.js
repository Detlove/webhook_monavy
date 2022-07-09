require('dotenv').config()

/* Dependences */
const express = require('express')
const cors = require('cors')
const axios = require('axios').default

/* Utils */
const mValidation = require('./utils/mValidation')
const mTemplates = require('./utils/templates')
const serialize = require('./utils/serialize')

const app = express()
app.use(express.json())
app.use(cors())

const defOptions = {
  method: 'POST',
  url: `https://api.ultramsg.com/${process.env.INSTANCE_ID}/messages/image`,
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  },
  data: {
    token: process.env.TOKEN,
    priority: 0
  }
}

/* Endpoint to / */
app.post('/', async (req, res) => {
  const m = req.body?.data?.body || 'no message'

  /* Prevent "*" character */
  const message = m.replace(/\*/g, '')

  const mValidated = mValidation(message)

  if (mValidated) {
    const { data } = req.body

    const options = {
      ...defOptions,
      data: serialize({
        ...defOptions.data,
        to: data.from,
        ...mTemplates[mValidated](message)
      })
    }

    await axios.request(options).then((response) => {
      console.log(response.data)
      res.status(200).end()
    }).catch(function (error) {
      console.error(error)
      res.status(500).end()
    })
  } else {
    res.end()
  }
})

const port = process.env.PORT || 3001
app.listen(port, () => { console.log(`App running on port ${port}`) })
