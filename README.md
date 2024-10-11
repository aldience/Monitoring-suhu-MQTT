### **Rangkuman Proyek Integrasi Sensor dengan MQTT, MySQL, dan Express**

1. **Gambaran Umum**:
    - Proyek ini mengintegrasikan data sensor dengan menggunakan protokol **MQTT**.
    - Koneksi dilakukan ke broker MQTT publik (`test.mosquitto.org`) dan berlangganan pada topik **"malih1/Data"**.
    - Setelah menerima pesan, kode mencoba mengurai data JSON dan menyimpannya ke dalam database **MySQL** menggunakan modul khusus bernama `sensorModel`.

2. **Interaksi Database (`sensorModel.js`)**:
    - Modul **`sensorModel.js`** berfungsi sebagai jembatan antara data sensor dan **MySQL**.
    - Fungsi **`insertSensorData`** menyimpan data sensor ke database.
    - Fungsi **`getAllSensorData`** mengembalikan seluruh data sensor yang tersimpan di database.

3. **Berlangganan Topik MQTT**:
    - Kode berlangganan pada topik **"malih/data"** yang menerima data dari sensor **DHT-22**.

4. **Integrasi dengan Express**:
    - Kode menggunakan **Express.js** untuk membuat **API REST** agar data sensor bisa diakses melalui HTTP.
    - Express menyediakan endpoint untuk mengambil data sensor dari database.
        - **GET `/sensor-data`**: Mengambil seluruh data sensor yang tersimpan.
    - Data yang diambil dari database melalui **sensorModel.js** dan ditampilkan dalam format **JSON**.

5. **Cara Penggunaan**:

    - **Langkah-langkah Setup**:
        1. **Install dependensi**:
            ```bash
            npm install express mqtt mysql2
            ```

        2. **Jalankan aplikasi**:
            ```bash
            node app.js
            ```

    - **API Route yang tersedia**:
        - **GET `/sensor-data`**: Mengembalikan data sensor dalam format JSON dari database MySQL.


7. **Kesimpulan**:
    - **Express** ditambahkan untuk membuat API yang dapat mengakses data sensor secara HTTP.
    - Kombinasi **MQTT** dan **Express** memungkinkan integrasi yang lebih luas, seperti menampilkan data sensor secara real-time melalui API atau interface web.
    - Dengan kode ini, Anda dapat mengatur aliran data dari MQTT ke database MySQL, sekaligus menyediakan endpoint untuk mengakses data sensor menggunakan HTTP.

Dengan demikian, proyek ini mencakup tiga komponen utama: **sensor** melalui MQTT, **database** MySQL untuk penyimpanan data, dan **Express.js** untuk akses HTTP ke data sensor.
