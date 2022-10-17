console.log('Building a To do App')

import express from 'express'
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('Somone is requesting at main page')
res.send('You can ask for or offer Water, Pizza, Ice Cream and Coffee')
})

app.get('/water', (req, res) => {
    console.log('Somone is requesting for water');
  res.send('Here is your Water')
})

app.post('/water', (req, res) => {
  console.log('Somone is offering for water');
res.send('Thanks! I have recieved water')
})

app.get('/pizza', (req, res) => {
  console.log('Somone is requesting for pizza');
res.send('Here is your Pizza')
})

app.post('/pizza', (req, res) => {
  console.log('Somone is offering for pizza');
res.send('Thanks! I have recieved Pizza')
})

app.get('/icecream', (req, res) => {
  console.log('Somone is requesting for Ice Cream');
res.send('Here is your Ice Cream')
})

app.post('/icecream', (req, res) => {
  console.log('Somone is offering for Ice Cream');
res.send('Thanks! I have recieved Ice Cream')
})

app.get('/coffee', (req, res) => {
  console.log('Somone is requesting for Coffee')
res.send('Here is your Coffee')
})

app.post('/coffee', (req, res) => {
  console.log('Somone is offering for Coffee')
res.send('Thanks! I have recieved Coffee')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})