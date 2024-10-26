const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads'); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); 
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const isValidMimeType = allowedTypes.test(file.mimetype);
  const isValidExtension = allowedTypes.test(path.extname(file.originalname).toLowerCase());

  if (isValidMimeType && isValidExtension) {
    cb(null, true);
  } else {
    cb(new Error('Erro: Tipo de arquivo não suportado!'));
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter
});

module.exports = upload;