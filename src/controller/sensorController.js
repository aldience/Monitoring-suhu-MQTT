const mqtt = require("mqtt");
const sensorModel = require("../models/sensorModel");
const mqttClient = mqtt.connect("mqtt://test.mosquitto.org");

mqttClient.on("connect", () => {
  mqttClient.subscribe("malih1/Data");
});

mqttClient.on("message", (_topic, message) => {
  try {
    const data = JSON.parse(message.toString());
    sensorModel.insertSensorData(data, (err, _result) => {
      if (err) {
        console.error("Error inserting data into MySQL: " + err.message);
      } else {
        console.log("Data inserted into MySQL");
      }
    });
  } catch (err) {
    console.error("Error parsing MQTT message: " + err.message);
  }
});

const getAllSensorData = async (req, res) => {
  try {
    const [data] = await sensorModel.getAllSensorData();
    res.json({
      message: "GET all sensor sucsess ",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server erorr",
      serverMessage: error,
    });
  }
};

const insertSensorData = async (_req, res) => {
  try {
    const [data] = await sensorModel.insertSensorData();
    res.json({
      message: "post all sensor sucsess ",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server erorr",
      serverMessage: error,
    });
  }
};

module.exports = {
  insertSensorData,
  getAllSensorData,
};
