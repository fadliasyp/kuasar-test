# Aplikasi Pembagi Tugas

## Deskripsi 
Aplikasi ini merupakan sistem manajemen tugas berbasis web yang dirancang untuk membantu pengguna dalam mengorganisir dan menyelesaikan tugas secara efisien. Aplikasi ini dibangun menggunakan JavaScript (**Node.js**) sebagai backend, dengan **PostgreSQL** sebagai database, serta menggunakan **ORM** **Prisma** untuk mengelola data dengan mudah dan aman.

## Fitur Utama
### Manajemen Pengguna (User Management)

Pengguna dapat mendaftar dan masuk ke dalam sistem.
Setiap pengguna dapat memiliki beberapa tugas yang harus diselesaikan.

### Manajemen Proyek (Project Management)

Pengguna dapat membuat proyek baru untuk mengelompokkan tugas.
Setiap proyek dapat memiliki banyak tugas yang terkait dengannya.

### Manajemen Tugas (Task Management)

Setiap tugas harus terkait dengan satu proyek dan bisa dimiliki oleh satu pengguna.
Tugas dapat memiliki status seperti pending, in progress, atau completed.
Informasi tugas disimpan dalam tabel Teknologi yang Digunakan

## Teknologi

- **Backend** : Node.js dengan Express.js
- **Database** : PostgreSQL
- **ORM** : Prisma
- **Keamanan** : Hashing password dengan bcrypt, autentikasi dengan JWT
- **Deploy** : Docker dengan multi-container (PostgreSQL + Node.js)

## Petunjuk Pengaturan Docker
Berikut adalah langkah-langkah untuk menjalankan proyek ini menggunakan Docker:

1. Clone repositori ini:
   ```bash
   git clone https://github.com/fadliasyp/kuasar-test.git
   cd kuasar-test
   ```
2. Buat file `.env` berdasarkan :
   ```bash
   cp postgresql://username:password@localhost:5432/kuasar_test" .env
   ```
3. Jalankan Docker Compose:
   ```bash
   docker-compose up -d --build
   ```
4. Aplikasi akan berjalan di `http://localhost:3000`.

## Dokumentasi API
Dokumentasi API tersedia di 
- [docs/USER_API_DOCUMENTATION.md](docs/USER_API_DOCUMENTATION.md)

- [docs/PROJECT_API_DOCUMENTATION.md](docs/PROJECT_API_DOCUMENTATION.md)

- [docs/TASK_API_DOCUMENTATION.md](docs/TASK_API_DOCUMENTATION.md)

## Konfigurasi Variabel Lingkungan
```env
PORT=3000
DATABASE_URL="postgresql://user:password@db:5432/mydb"
JWT_SECRET="rahasia_sangat_rahasia"
```
 
------

# Dokumentasi Docker

## 1. Arsitektur Wadah
Proyek ini menggunakan Docker untuk containerization. Berikut adalah arsitektur wadah yang digunakan:

**app** : Container untuk aplikasi Node.js.

Berjalan di port **3000**.

Terhubung ke container db untuk akses database.

Menggunakan bind mount untuk sinkronisasi kode selama pengembangan.

**db**: Container untuk database **PostgreSQL**.

Berjalan di port **5432**.

Menggunakan volume Docker untuk persistensi data.

## 2. Instruksi untuk Membangun dan Menjalankan Container
Persyaratan
Docker dan Docker Compose sudah terinstal di sistem Anda.

File **.env** sudah diisi dengan variabel lingkungan yang diperlukan.

**Langkah-Langkah :**

1. Clone Repository 

```bash
git clone https://github.com/fadliasyp/kuasar-test.git
cd kuasar-test
```
2. Buat file .env berdasarkan .env.example:
```.env
cp .env.example .env
```
3. Build dan jalankan container :
```
docker-compose up -d --build
```
4. Aplikasi akan berjalan di http://localhost:3000.

**Perintah Lainnya**

Melihat log aplikasi :

```
docker-compose logs -f app
```
Melihat log Database :

```
docker-compose logs -f db
```
Menghentikan Container :

```
docker-compose down
```
Menghapus volume database (hati-hati, ini akan menghapus semua data) :

```
docker-compose down -v
```

## 3. Manajemen Volume
Volume Docker digunakan untuk persistensi data, terutama untuk database PostgreSQL.

Volume yang Digunakan
**pgdata**: Volume untuk menyimpan data PostgreSQL.

Lokasi di host: **/var/lib/docker/volumes/my-project_pgdata**.

Lokasi di container: **/var/lib/postgresql/data**.

- Melihat Volume :
```
docker volume ls
```
- Melihat detail Volume :
```
docker volume inspect my-project_pgdata
```
- Menghapus Volume dan menghentikan container :
```
docker-compose down -v
```

## 4. Konfigurasi Pengembangan dan Produksi
#### Konfigurasi Pengembangan

- **Bind Mount**: Selama pengembangan, kode aplikasi di-mount ke container untuk memungkinkan perubahan langsung tanpa rebuild.
```
volumes:
  - .:/usr/src/app
  - /usr/src/app/node_modules
```
- **Environment Variable** : Gunakan file .env untuk menyimpan variabel lingkungan seperti DATABASE_URL dan JWT_SECRET.

- **Hot Reload** : Gunakan nodemon atau fitur hot reload untuk memperbarui aplikasi secara otomatis saat kode berubah.

#### Menjalankan di Produksi
**Build image produksi :**
```
docker-compose -f docker-compose.prod.yml build
```
**Jalankan container produksi :**
```
docker-compose -f docker-compose.prod.yml up -d
```