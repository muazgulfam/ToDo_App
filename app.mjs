console.log('Building a To do App')

import express from 'express'
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('Somone is requesting')
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})