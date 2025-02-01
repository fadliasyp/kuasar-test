// import multer from 'multer';
// import path from 'path';

// // Konfigurasi penyimpanan file
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './uploads/avatars'); // Folder tujuan untuk menyimpan file
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     const ext = path.extname(file.originalname);
//     cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`); // Format nama file
//   },
// });

// // Filter file untuk memastikan hanya file PNG/JPEG yang diterima
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ['/image/png', 'image/jpeg', 'image/jpg'];
//   if (!allowedTypes.includes(file.mimetype)) {
//     cb(new Error('Only PNG, JPEG, and JPG files are allowed!'), false);
//   } else {
//     cb(null, true);
//   }
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 2 * 1024 * 1024 }, // Maksimal ukuran file 2 MB
// });

// export { upload }

console.log("hahhaah")