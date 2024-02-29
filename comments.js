// create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const newComment = {
        id: comments.length + 1,
    };
}); // Add closing curly brace here
