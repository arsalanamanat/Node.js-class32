const fs = require('fs');
const path = require('path');

const readAllPost = (req, res) => {
  const files = fs.readdirSync(path.join(__dirname, '../Created Files'));
  res.status(200);
  res.send(files);
};

module.exports = readAllPost;
