const express = require('express');
const deleteFile = require('./util');

const app = express();

app.get("/", (req, res)=>{
    let url = "https://rickandmortyapi.com/api/character/1"
    
    fetch(url)
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        res.status(200).json(data)
        
     })
     .catch(err=>{
         res.status(500).json("hay algun error")
        console.log(err)
    })
    
})

app.get("/asyncAwait", async(req, res)=>{

    let url = "https://rickandmortyapi.com/api/character/1"
    
    try {
        const result = await fetch(url);
        const data = await result.json();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json("Hay algun error con la petición fetch")
    }
})


let users=[
    {id: "1", name:"pepe", img:"foto01.jpg"},
    {id: "2", name:"Maria", img:"foto2.jpg"}
]

app.get("/all", (req, res)=>{
    res.status(200).json(users)
})

app.get("/borrar/:id", (req, res)=>{
    const {id} = req.params;
    const fotoABorrar = users.find(e=>e.id === id).img;
    deleteFile(fotoABorrar, "users")
    users = users.filter((e)=>e.id!==id)
    res.status(200).json("todo ok")
})

app.listen(4000);
