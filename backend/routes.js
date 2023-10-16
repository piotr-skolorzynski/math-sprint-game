const express = require("express");
const gamesController = require("./game-contoller");

const router = express.Router();

router.get("/games", gamesController.getGames);

exports = router;
