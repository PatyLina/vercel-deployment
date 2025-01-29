import express from "express";



const app= express();

app.use("/",(req,res)=> {
     res.send("Servidor esta corriendo");
});

const PORT=3030;
app.listen(PORT,console.log("Servidor INICIADO EN EL PUESTOR 3030"));
