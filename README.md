# API-MYSQL---MQTT---DHT22

## Gambaran Umum

Kode JavaScript yang disediakan menangani integrasi data sensor menggunakan protokol MQTT (Message Queuing Telemetry Transport). Ini berlangganan ke topik tertentu di broker MQTT, menerima pesan masuk, menguraikannya, dan menyisipkan data sensor ke dalam database MySQL. Selain itu, kode ini menyertakan fungsi untuk mengambil semua data sensor dari database dan menyisipkan data sensor baru.

#### 1.1 Ketergantungan

- `mqtt`: Klien MQTT untuk Node.js.

#### 1.2 Inisialisasi

- Kode ini membuat koneksi ke broker MQTT (`test.mosquitto.org`) dan berlangganan ke topik `"malih1/Data"`.

```javascript
const mqtt = require("mqtt");
const sensorModel = require("../models/sensorModel");
const mqttClient = mqtt.connect("mqtt://test.mosquitto.org");

mqttClient.on("connect", () => {
  mqttClient.subscribe("malih1/Data");
});
```

#### 1.3 Penanganan Pesan

- Saat menerima pesan, kode ini mencoba mengurai sebagai JSON dan kemudian menyisipkan data sensor ke dalam database MySQL menggunakan modul `sensorModel`.

```javascript
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
```

#### 1.4 Titik Akhir API

- Dua titik akhir API didefinisikan untuk penanganan data sensor:

  - `getAllSensorData`: Mengambil semua data sensor dari database dan memberikan respons dengan objek JSON.
  - `insertSensorData`: Menyisipkan data sensor baru ke dalam database dan memberikan respons dengan objek JSON.

```javascript
const getAllSensorData = async (req, res) => {
  // Detail implementasi...
};

const insertSensorData = async (_req, res) => {
  // Detail implementasi...
};

module.exports = {
  insertSensorData,
  getAllSensorData,
};
```

### 2. Interaksi Database (`sensorModel.js`)

#### 2.1 Ketergantungan

- `dbPool`: Pool koneksi database yang dikonfigurasi dalam modul `../config/database`.

#### 2.2 Fungsi-fungsi

- `insertSensorData`: Menyisipkan data sensor ke dalam database MySQL.

```javascript
const insertSensorData = (data, callback) => {
  // Detail implementasi...
};
```

- `getAllSensorData`: Mengambil semua data sensor dari database.

```javascript
const getAllSensorData = () => {
  // Detail implementasi...
};
```

#### 2.3 Berlanggan topik MQTT 

- Pada kasus ini menggunakan Dht-22 sebagai sumber data 
- Dengan topik **malih/data**

```javascript
{
  "temperature": 25.5,
  "humidity": 60.2
}
```

## Penggunaan

Untuk menggunakan kode ini, ikuti langkah-langkah berikut:

1. Pastikan Node.js terinstal di sistem Anda.
2. Instal dependensi yang diperlukan dengan menjalankan `npm install`.
3. Jalankan aplikasi dengan perintah `node mqttHandler.js`.

## Kesimpulan

Implementasi ini menyediakan dasar untuk menangani data sensor melalui komunikasi MQTT dan interaksi dengan database MySQL. Ini dapat diperluas atau dimodifikasi berdasarkan persyaratan tertentu. Pastikan untuk mengkonfigurasi parameter broker MQTT dan koneksi database sesuai kebutuhan.

```

