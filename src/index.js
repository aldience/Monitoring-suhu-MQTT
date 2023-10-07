const express = require("express");
const bodyParser = require('body-parser');
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const userRoutes = require("./routes/users");
const sensorRoutes = require('./routes/sensorRoutes'); // Pastikan nama variabel sesuai
const middlewareLogRequest = require("./middleware/logs"); // Perbaiki nama variabel

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(middlewareLogRequest);
app.use(express.json());
app.use("/users", userRoutes);
app.use('/sensor', sensorRoutes); // Tambahkan penggunaan sensorRouter


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
