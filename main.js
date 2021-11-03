const app = require('express')();
const chalk = require('chalk');
const axios = require('axios');
const cors = require('cors');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

var api = require("./api");
var chart = require("./graph");


app.get('/', cors(corsOptions), api.select);
app.get('/view', cors(corsOptions), api.view);
app.get('/view/harmony', cors(corsOptions), api.harmony);
app.get('/view/beats', cors(corsOptions), api.beats);
app.get('/view/freshbeat', cors(corsOptions), api.freshbeat);
app.get('/view/aqua', cors(corsOptions), api.aqua);
app.get('/view/bladefm', cors(corsOptions), api.bladefm);
app.get('/view/redras', cors(corsOptions), api.redras);
app.get('/view/pulse', cors(corsOptions), api.pulse);


app.get('/graph', cors(corsOptions), chart.select);


app.listen(3000, () => {
    console.log(`API running`);
  });

