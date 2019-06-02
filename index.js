const express = require('express');
const app = express();
const fs = require('fs');

let resultJson = "";

fs.readFile('inscripcion.txt', 'utf8', function(err, contents) {
    resultJson = contents;
});

app.get('/', function(req, res) {
    let result = JSON.parse(resultJson);
    res.send(result);
})

app.listen(3000, () => {
    console.log('\033[2J');
    console.log("Servicio inciado por el puerto 3000");
});