const express = require("express");
const router = express.Router();
const Deputy = require("../models/Deputy.model");

router.get("/voting", (req, res) => {
      res.render("voting");
    });

module.exports = router;
