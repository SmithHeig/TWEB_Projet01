require('dotenv/config');
const express = require('express');
const Github = require('./src/Github');
const utils = require('./src/utils');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;
const client = new Github({ token: process.env.OAUTH_TOKEN })

app.use(cors());

app.get('/friends/:username', (req, res, next) => {
    client.friends(req.params.username)
        .then(utils.getUserFriends)
        .then(friends => {
            if(Object.keys(friends).length){
                res.send(friends)
            } else {
                res.status(400).send('Bad Request');
            }
        })
        .catch(next)
});

// Forward 404 to error handler
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// Error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    console.error(err);
    res.status(err.status || 500);
    res.send(err.message);
});


app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;