const dbPool = require("../config/database");

const insertSensorData = (data, callback) => {
  const { temperature, humidity } = data;
  const sql = "INSERT INTO sensor_data (temperature, humidity) VALUES (?, ?)";
  dbPool.query(sql, [temperature, humidity], callback);
};

const getAllSensorData = () => {
  const SQLQuery = "SELECT * FROM sensor_data ORDER BY timestamp DESC";
  return dbPool.execute(SQLQuery);
};

module.exports = {
  insertSensorData,
  getAllSensorData,
};
