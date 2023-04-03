import express from "express"

const router = express.Router()

app.get("/productos", (req, res) => {
    res.send("hola mi server en express")
})