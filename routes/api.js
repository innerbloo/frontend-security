const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "hello" });
});

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

module.exports = router;
