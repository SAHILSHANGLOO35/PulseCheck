import express from "express";
import v1Router from "./routes/v1";

const app = express();
app.use(express.json());

app.use("/api/v1", v1Router);

app.get("/", (req, res) => {
    res.send("Hi from Sahil Shangloo");
});

app.listen(process.env.PORT, () => {
    console.log(`SERVER STARTED ON PORT ${process.env.PORT}`);
});
