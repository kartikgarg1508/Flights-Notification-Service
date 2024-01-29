const amqplib = require("amqplib");
const { ServerConfig } = require("../../config");
const { TicketService } = require("../../services");

const queue = "Notification-queue";

async function connectQueue() {
  try {
    const connection = await amqplib.connect(ServerConfig.RABBITMQ_SERVER);
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    channel.consume(queue, async (message) => {
      try {
        const data = JSON.parse(message.content.toString());
        await TicketService.sendEmail({
          mailFrom: ServerConfig.GMAIL_EMAIL,
          mailTo: data.recipientEmail,
          subject: data.subject,
          text: data.text,
        });
        channel.ack(message);
      } catch (error) {
        console.log("Not able to send email");
      }
    });
  } catch (error) {
    throw error;
  }
}

module.exports = connectQueue;
