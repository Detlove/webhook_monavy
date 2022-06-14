require('dotenv').config()

/* Dependences */
const express = require('express')
const cors = require('cors')
const axios = require('axios').default

/* Utils */
const mValidation = require('./utils/mValidation')
const mTemplates = require('./utils/templates')

const app = express()
app.use(express.json())
app.use(cors())

const defOptions = {
  method: 'POST',
  url: 'https://api.wali.chat/v1/messages',
  headers: { 'Content-Type': 'application/json', Token: process.env.WA_TOKEN }
}

/* Endpoint to / */
app.post('/', async (req, res) => {
  const body = req?.body || {}
  const message = body?.data?.body || 'no message'

  const mValidated = mValidation(message)

  if (mValidated) {
    const { data } = body

    const options = {
      ...defOptions,
      data: {
        phone: data.fromNumber,
        ...mTemplates[mValidated](message)
      }
    }

    await axios.request(options).then((response) => {
      console.log(response.data)
    }).catch(function (error) {
      console.error(error)
      res.status(500).end()
    })

    res.end()
  } else {
    res.end()
  }
})

const port = process.env.PORT || 3001
app.listen(port, () => { console.log(`App running on port ${port}`) })
