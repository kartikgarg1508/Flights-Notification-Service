const { TicketRepository } = require("../repositories");
const { AppError } = require("../utils/errors");
const { StatusCodes } = require("http-status-codes");
const { EmailConfig } = require("../config");
const ticketrepository = new TicketRepository();

async function createTicket(data) {
  try {
    const response = await ticketrepository.create(data);
    return response;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((element) => {
        explanation.push(element.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "Something went wrong",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function sendEmail(data) {
  try {
    const response = await EmailConfig.sendMail({
      from: data.mailFrom,
      to: data.mailTo,
      subject: data.subject,
      text: data.text,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

async function getPendingTickets() {
  try {
    const response = ticketrepository.getPendingTickets();
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createTicket,
};
