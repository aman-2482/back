require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/aman', (req, res) => {
    res.send('Hello ama ')
  })
app.get('/you', (req, res) => {
    res.send('Hello am ')
  })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})