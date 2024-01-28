const express = require("express");
const { TicketController } = require("../../controllers");
const { TicketMiddleware } = require("../../middlewares");

const router = express.Router();
/*
POST: /api/v1/tickets
req-body 
{
    recipientEmail: abc@gmail.com
    subject: Flight booking successfull
    content: Flight details
    status: PENDING
}
*/

router.post(
  "/",
  TicketMiddleware.validateCreateTicket,
  TicketController.createTicket
);

module.exports = router;
