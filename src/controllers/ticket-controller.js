const { TicketService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

async function createTicket(req, res) {
  try {
    const data = {
      recipientEmail: req.body.recipientEmail,
      subject: req.body.subject,
      content: req.body.content,
      status: req.body.status,
    };

    const ticket = await TicketService.createTicket(data);
    SuccessResponse.data = ticket;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createTicket,
};
