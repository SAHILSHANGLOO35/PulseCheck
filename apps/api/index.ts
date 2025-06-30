import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hi from Sahil Shangloo");
})

app.listen(process.env.PORT, () => {
    console.log(`SERVER STARTED ON PORT ${process.env.PORT}`)
})