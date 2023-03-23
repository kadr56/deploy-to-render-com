const uploader = require("multer");

module.exports = uploader({
  storage: uploader.diskStorage({}),
  limit: { fileSize: 10_000_000 }, // 10MB data
});
