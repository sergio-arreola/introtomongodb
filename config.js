const codes = require("./facebook/codes");

module.exports = {
  secretKey: "12345-67890-09876-54321",
  mongoUrl: "mongodb://localhost:27017/nucampsite",
  facebook: {
    clientId: codes.facebookId,
    clientSecret: codes.facebookSecret,
  },
};
