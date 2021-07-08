const inInvalid = (req, res) => {
  if (typeof req.body.content == 'undefined') {
    res.send(`Content is Undefined`);
    return true;
  } else {
    return false;
  }
};

module.exports = inInvalid;
