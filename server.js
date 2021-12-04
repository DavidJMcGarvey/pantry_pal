require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Set public directory as root
app.use(express.static('public'));

// Allow front-end access to node_modules dir
app.use('/scripts', express.statuc(`${__dirname}/node_modules`));

// Express error handler
const errorHandler = (err, req, res) => {
    if (err.response) {
        // The request was made and the derver responds with a status code
        // that falls out of the range of 2xx
        res.status(403).send({title: 'Server responded with an error', message: err.message});
    } else if (err.request) {
        // the request was made but no response was revieved
        res.status(503).send({title: 'Unable to communicate with server', message: err.message});
    } else  {
        // Something happend in setting up the request that triggered an Error
        res.status(500).send({title: 'An unexpected error occured', message: err.message});
    }
}

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

// Listen for HTTP requests on port 3000
app.listen(port, () => {
    console.log('listening on %d', port);
});