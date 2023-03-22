import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

// GET
app.get('/', (req, res, next) =>{
    res.send('Escuchando con Railway...')
})
app.get('/env', (req, res, next) => {
    res.send(`Solicitando el entorno: ${process.env.VICIOUS_COFFEE}`)
})

// LISTEN
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
