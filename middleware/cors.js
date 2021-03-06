const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  AccessControlAllowOrigin: "https://example.com",
  AccessControlAllowCredentials: true,
};

module.exports = cors(corsOptions);
