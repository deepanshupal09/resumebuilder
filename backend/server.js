const express = require('express')
const routes = require('./route')
const cors = require("cors")
const db = require('./db');


const app = express()
const port = 3001

app.use(express.json());
app.use(cors())
app.use('/api/data/', routes)

// app.get('/', (req,res) => {
//   res.send("Hello W!");
// })

app.get('/', async (req, res) => {
  
});

app.listen(3001, () => {
  console.log(`Example app listening on port ${port}`)
})