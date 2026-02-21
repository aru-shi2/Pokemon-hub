const express = require('express')
const axios=require("axios");
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors());

app.get('/', async(req, res) => {
  const r=await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0")
  res.json({
    "msg":r.data
  })
})

app.get('/info/:id', async(req, res) => {
  const id=req.params.id;
  const a=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  res.json({
    "msg":a.data
  })
})

app.get('/next', async(req, res) => {
  const rk=await axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
  res.json({
    "msg":rk.data
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
