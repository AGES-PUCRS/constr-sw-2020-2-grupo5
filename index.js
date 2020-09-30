const path = require('path');
const http = require('http');
const express = require("express");
const mongoose = require('mongoose');
const routes = require('./routes.js');
const database = require("./services/database");
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

const ENV_FILE = path.join(__dirname, '.env');
require('dotenv').config({ path: ENV_FILE });

// Start routes
routes({ app });

console.log("Starting Server")

// Start server
server.http.listen(process.env.HTTP_PORT, () => {
    console.log(`Listening on http://localhost:${ process.env.HTTP_PORT }`);
});
