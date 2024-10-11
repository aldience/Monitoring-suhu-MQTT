### **Rangkuman Proyek Integrasi Sensor dengan MQTT dan MySQL**

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

4. **Cara Penggunaan**:
    - Langkah-langkah untuk menjalankan kode:
        - Install dependensi yang diperlukan.
        - Jalankan aplikasi untuk mulai mendengarkan topik MQTT dan menyimpan data ke database.

5. **Kesimpulan**:
    - Kode ini mengatur alur data sensor dari MQTT ke database MySQL.
    - Proyek ini fleksibel dan dapat diperluas atau disesuaikan dengan perubahan pada konfigurasi broker MQTT maupun koneksi database.

Dengan pendekatan ini, data sensor dapat dikelola secara efektif menggunakan protokol MQTT dan diintegrasikan dengan database untuk penyimpanan dan analisis lebih lanjut.
