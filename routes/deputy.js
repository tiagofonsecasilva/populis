const express = require("express");
const router = express.Router();
const Deputy = require("../models/Deputy.model");

router.get("/deputies", async (req, res) => {
    const deputies = await Deputy.find().sort({ name: 1 }).populate("party");
    res.render("deputies/deputies-list", { deputies });
  });
  
router.get("/deputies/:deputyId", async (req, res) => {
  const deputyDetail = await Deputy.findById(req.params.deputyId).populate("party");
  res.render("deputies/deputy-detail", deputyDetail);
});

module.exports = router;
