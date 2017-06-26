const express = require("express");
const router = express.Router();

router.get("/json", (req, res) => res.json({"foo": "1", "lepo": "2"}));


module.exports = router;
