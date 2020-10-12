const path = require('path');
const http = require('http');
const express = require("express");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const mongoose = require('mongoose');
const routes = require('./src/routes/routes.js');
const database = require("./src/services/database");
const cors = require("cors")({
    origin: true
});

const app = express();
app.use(cors);
app.use(express.json());

mongoose.connect('mongodb://user:pass@localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true});

const server = {
    http: http.createServer(app),
};

var options = {
    explorer: true
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

const ENV_FILE = path.join(__dirname, '.env');
require('dotenv').config({ path: ENV_FILE });

// Start routes
routes({ app });

console.log("Starting Server")

// Start server
server.http.listen(process.env.HTTP_PORT, () => {
    console.log(`Listening on http://localhost:${process.env.HTTP_PORT}`);
});
