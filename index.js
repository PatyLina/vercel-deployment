import express from "express";

const app= express();

app.use("/",(req,res)=> {
     res.send("Servidor esta corriendo");
});

const PORT=3030;
app.listen(PORT,console.log("Servidor INICIANDO EN EL PUERTO 3030"));
