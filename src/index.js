const express = require("express");
const { ServerConfig, LoggerConfig } = require("./config");
const MessageQueue = require("./utils/common/message-queue");
const app = express();
const apiRoutes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server started successfully at Port : ${ServerConfig.PORT}`);
  LoggerConfig.info("Successfully started server", {});
  try {
    await MessageQueue();
  } catch (error) {
    console.log("Error connecting to notification Queue");
  }
});
