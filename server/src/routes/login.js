const express = require('express');
const bd = require('../../db');

const router = express.Router();

router.post('', (req, res) => {
  let user = bd.users.filter(
    (user) => user.name === req.body.name && user.password === req.body.password
  );

  if (user.length) {
    return res
      .status(200)
      .json({ name: user[0].name, contactList: user[0].contactList });
  } else {
    return res.sendStatus(401);
  }
});

module.exports = router;
