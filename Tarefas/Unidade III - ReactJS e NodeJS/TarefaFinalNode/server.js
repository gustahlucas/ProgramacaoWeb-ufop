const express = require('express');
const bodyParser = require('body-parser');
const fse = require('fs-extra');

const app = express();
const jsonParser = bodyParser.json();

const logNames = require('./log_nomes.json');

app.use(express.static('public'));

async function onReceive(request, response) {
  const key = request.body['name'].toLowerCase();
  const value = request.body['time'];

  logNames[key] = value;

  await fse.writeJson('./log_nomes.json', logNames);
  response.json({ success: true });
}

app.post('/nome/', jsonParser, onReceive);

app.listen(3000, function () {
  console.log('Escutando na porta 3000');
});
