const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/v1/formdata', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})