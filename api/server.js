const express = require("express");

const server = express();

const db = require("../data/dbConfig")

server.use(express.json());


server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/api/pancakes",(req,res)=>{
  db("pancakes").select("id","type")
  .then(pancakes => {
    console.log(pancakes)
    res.status(200).json(pancakes)
  })  
})

server.post("/api/pancakes", (req,res)=> {
  db("pancakes")
    .insert(req.body)
    .then(id =>res.status(201).json({id}))
    .catch(e => res.status(500).json({error:"error"}))
})

server.delete("/api/pancakes/:id",(req,res)=> {
  db("pancakes")
  .where("id",req.params.id)
  .del()
  .then(p => 
    res.status(200).json({message: "deleted"})
  )
  .catch(e => res.status(500).json({error:"error"}))
})

module.exports = server;