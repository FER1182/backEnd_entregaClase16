const express = require ("express")
const knex = require("./db.js")


const app = express()
//CREAR PRODUCTO

app.post("/",(req,res)=>{

})

app.listen(8080, ()=>{
    console.log("server ok")
})