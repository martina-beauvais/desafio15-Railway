import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

// GET
app.get('/', (req, res, next) =>{
    res.send('Escuchando con Railway...')
})

// LISTEN
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
