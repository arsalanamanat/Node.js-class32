const fs = require('fs');
const path = require('path');

const deletePost = (req, res) => {
  fs.readdir(path.join(__dirname, '../Created Files'), (err, files) => {
    if (err) {
      throw err;
    }

    files.forEach((file) => {
      const filename = path.basename(file);
      if (filename == req.params.title) {
        fs.unlinkSync(path.join(__dirname, '../Created Files', file));
        res.status(200);
        res.send(`Your Blog file has been deleted`);
        res.end();
      }
    });
  });
};

module.exports = deletePost;
