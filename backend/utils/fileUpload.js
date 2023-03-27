const multer = require("multer");

const HttpError = require("../../http-error");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  // "video/mp4": "mp4",
  "application/pdf": "pdf",
  // "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
  //   "docx",
  "application/msword": "doc",
  "application/doc": "doc",
  "application/ms-doc": "doc",
  "application/excel": "xls",
  "application/vnd.ms-excel": "xls",
  "application/x-excel": "xlsx",
  "application/x-msexcel": "xlsx",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
  "video/quicktime": "mov",
  // "video/x-msvideo": "avi",
  // "video/x-ms-wmv": "wmv",
  "video/webm": "webm",
  "audio/ogg": "ogg",
  // "image/tiff": "tiff",
  "image/gif": "gif",
  "image/webp": "webp",
};

const fileUpload = (path) =>
  multer({
    limits: 500000,
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, `uploads/images/${path}`);
      },
      filename: (req, file, cb) => {
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(
          null,
          new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
        );
      },
    }),
    // storage: multerS3({
    //   acl: "public-read",
    //   s3,
    //   bucket: process.env.ORACLE_STORAGE_BUCKET_NAME,
    //   key: function (req, file, cb) {
    //     cb(
    //       null,
    //       `uploads/images/${path}/${new Date()
    //         .toISOString()
    //         .replace(/:/g, "-")}-${file.originalname}`
    //     );
    //   },
    // }),
    fileFilter: (req, file, cb) => {
      const isValid = !!MIME_TYPE_MAP[file.mimetype];
      let error = isValid
        ? null
        : new HttpError(
          req,
          new Error().stack.split("at ")[1].trim(),
          "Invalid type",
          500
        );
      cb(error, isValid);
    },
  });

module.exports = fileUpload;
