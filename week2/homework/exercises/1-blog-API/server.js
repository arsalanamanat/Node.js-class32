const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');
const createBlog = require('./CRUD Functions/createABlog');
const updateBlog = require('./CRUD Functions/updateABlog');
const deletePost = require('./CRUD Functions/deleteAPost');
const isInvalid = require('./isInvalid');

// YOUR CODE GOES IN HERE
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.post('/blogs', (req, res) => {
  // How to get the title and content from the request??
  createBlog(req, res);
});

app.put('/blogs/:title', (req, res) => {
  if (isInvalid(req, res)) {
    res.status(400);
    return;
  }
  updateBlog(req, res);
});

app.delete('/blogs/:title', (req, res) => {
  deletePost(req, res);
});

app.listen(3000);
