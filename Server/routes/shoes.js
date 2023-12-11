const express = require("express");

const {
  getAllShoes,
  createShoe,
  getShoe,
  updateShoe,
  deleteShoe,
} = require("../controllers/shoes");

const router = express.Router();

router.route("/").get(getAllShoes).post(createShoe);

router.route("/:id").get(getShoe).put(updateShoe).delete(deleteShoe);
module.exports = router;
