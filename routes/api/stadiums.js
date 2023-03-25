const express = require("express");
const router = express.Router();
const stadiumCtrl = require("../../controllers/api/stadiums");

router.get("/stadiums", stadiumCtrl.create);

module.exports = router;
