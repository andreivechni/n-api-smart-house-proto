const addon = require('./build/Release/module');
let state = false;
let html = '/lightsoff.html';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + html);
});

app.get('/lights', (req, res) => {
    if(!state) {
        state = true;
        html = '/lights.html';
    } else {
        state = false;
        html = '/lightsoff.html';
    }
    addon.illumination();
    res.redirect('/');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));