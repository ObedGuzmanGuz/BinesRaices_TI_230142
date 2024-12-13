import multer from 'multer';
import path from 'path';
import { generateID } from '../helpers/tokens.js';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Cambia la ruta a './public/img/'
        cb(null, './public/img/');
    },
    filename: function (req, file, cb) {
        // Usa generateID() para generar un nombre único y conserva la extensión
        cb(null, generateID() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

export default upload;
