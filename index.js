import express from 'express';

const app = express();

function handleRequest(req, res) {
  res.send('Hola mundo');
}

app.get('/', handleRequest);

app.listen(3000, () => console.log('Servidor corriendo :)'));
