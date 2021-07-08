const fs = require('fs');
const path = require('path');

const updateBlog = (req, res) => {
  fs.readdir(path.join(__dirname, '../Created Files'), (err, files) => {
    if (err) {
      throw err;
    }

    files.forEach((file) => {
      const filename = path.basename(file);
      if (filename == req.params.title) {
        fs.writeFileSync(
          path.join(__dirname, '../Created Files', file),
          req.body.content,
        );
        res.status(200);
        res.send(`Your Blog has been Updated`);
        res.end();
      }
    });
  });
};

module.exports = updateBlog;
