const knex = require("knex")({
    client:"mysql",
    connection:{
        host:"localhost",//o 127.0.0.1
        port:3306,
        user:"root",
        password:"",
        database:"entrega16"
    },
   pool:{min:2, max:8}//como organizo las consultas
})
knex.schema.createTableIfNotExists("users",function(table){
    table.increments("id").primary()
    table.string("name")
    table.string("email",128) //el 128 son la cant de caracteres
    table.string("password")
})
.then(()=>{
    console.log("Conexion y Tabla creada")
})
.catch((err)=>{
    console.log(err)
})

 module.export= knex