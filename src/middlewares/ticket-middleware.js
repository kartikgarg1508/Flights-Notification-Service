const { ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils/errors");
const { StatusCodes } = require("http-status-codes");

async function validateCreateTicket(req, res, next) {
  if (req.body.recipientEmail && req.body.content && req.body.subject) {
    next();
  } else {
    ErrorResponse.message =
      "Something went wrong while creating the notification ticket";
    let explanation = [];
    if (!req.body.recipientEmail) {
      explanation.push("recipientEmail not found in the incoming request");
    }

    if (!req.body.content) {
      explanation.push("content not found in the incoming request");
    }

    if (!req.body.subject) {
      explanation.push("subject not found in the incoming request");
    }

    ErrorResponse.error = new AppError(explanation, StatusCodes.BAD_REQUEST);
    return res.status(ErrorResponse.error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  validateCreateTicket,
};
