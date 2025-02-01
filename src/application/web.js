import express from "express";
import bodyParser from "body-parser";
import FileUpload from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoute } from "../route/user-api.js";
import fs from 'fs';
import { taskRoute } from "../route/task-api.js";
import { projectRoute } from "../route/project-api.js";

// Dapatkan path direktori saat ini
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const web = express();

const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

web.use(FileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, '../temp'),
    limits: { fileSize: 2 * 1024 * 1024 }, // Maksimal ukuran file 2 MB
    abortOnLimit: true,
  }));



web.use('/uploads', express.static(uploadDir));
web.use(cors({ origin: "http://localhost:3000", credentials: true }));
// web.use(FileUpload());
web.use((req, res, next) => {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    console.log("Files:", req.files);
    next();
  });
  
web.use(express.json());
web.use(cookieParser());
// web.use(express.urlencoded({ extended: true }));


// web.use(express.static(path.join(__dirname, "./src/public")));

web.use(userRoute)
web.use(taskRoute)
web.use(projectRoute)
