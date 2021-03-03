var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req, res) => {
  console.log("收到请求体：", req.body);
  res.status(201).send("users ok");
});

module.exports = router;
