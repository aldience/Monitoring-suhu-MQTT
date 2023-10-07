const express = require("express");
const sensorController = require("../controller/sensorController");
const router = express.Router();


router.post("/", sensorController.insertSensorData);
router.get("/", sensorController.getAllSensorData);

module.exports = router;
