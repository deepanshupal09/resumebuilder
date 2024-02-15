const express = require('express')
const routes = require('./route')
const db = require('./db');


const app = express()
const port = 3001

app.use(express.json());
app.use('/api/data/', routes)


app.get('/', async (req, res) => {
  
});

app.listen(3001, () => {
  console.log(`Example app listening on port ${port}`)
})