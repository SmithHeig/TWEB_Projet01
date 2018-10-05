const express = require('express');
const Github = require('./src/Github');

const app = express();
const port = process.env.PORT || 3000;
const client = new Github({ token: process.env.OAUTH_TOKEN})

app.use(cors());
