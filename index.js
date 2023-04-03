const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hola mi server en express")
})

app.get("/productos", (req, res) => {
    res.send("hola mi server en express")
})

app.get("/carrito", (req, res) => {
    res.json({
        producto: 1,
        nose: "loco"
    })
})


app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`)
  })