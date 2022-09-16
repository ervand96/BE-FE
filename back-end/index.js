import express from 'express';
import * as fs from 'fs';


const PORT = process.env.PORT ?? 4000;
const data = fs.readFileSync('back-end/constants.json');
const app = express();

app.get('/user', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data)
})

app.listen(PORT, () => {
    console.log(`Server ${PORT}`);
})