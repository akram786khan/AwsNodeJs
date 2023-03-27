const fs = require("fs");
const moment = require("moment");

class HttpError extends Error {
  constructor(req, stack, message, errorCode) {
    super(message);
    this.code = errorCode;

    const currentDate = moment().format("DD-MM-YYYY");

    if (req) {
      const data = `
    ----------------------------
      URL = ${req.url}
      Method = ${req.method}
      userId = ${req.userId}
      isAdmin = ${req.isAdmin}
      Body = ${JSON.stringify(req.body)}
      Query = ${JSON.stringify(req.query)}
      Params = ${JSON.stringify(req.params)}
      Header = ${req.get("Authorization")}
      Token = ${req.token}
      AT = ${stack}
      Message = ${message}
      Time = ${moment().format("hh:mm A")}
    `;

      fs.appendFile(
        `log/error/${currentDate}.txt`,
        data,
        "utf8",
        function (err) {
          // if (err) throw err;
          // console.log("Data is appended to file successfully.");
        }
      );
    }
  }
}

module.exports = HttpError;
