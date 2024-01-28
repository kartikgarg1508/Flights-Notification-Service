const express = require("express");
const { infoController } = require("../../controllers");
const TicketRoutes = require("./ticket-routes");

const router = express.Router();

router.get("/info", infoController.info);
router.use("/tickets", TicketRoutes);

module.exports = router;
