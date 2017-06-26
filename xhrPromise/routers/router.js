const express = require("express");
const router = express.Router();

router.get("/student", (req, res) => res.json({"rakesh": "1", "bomkesh": "2"}));

router.get("/teacher", (req, res) => res.json({"dinesh": "10", "jignesh": "21"}));

router.get("/staff", (req, res) => res.json({"simu": "110", "dimu": "121"}));

module.exports = router;
