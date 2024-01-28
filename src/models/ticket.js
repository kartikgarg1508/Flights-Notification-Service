"use strict";
const { Model } = require("sequelize");
const { Enums } = require("../utils/common");
const { PENDING, SUCCESSFULL, FAILED } = Enums.TICKET_STATUS;
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init(
    {
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      recipientEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      status: {
        type: DataTypes.ENUM,
        values: [PENDING, SUCCESSFULL, FAILED],
        defaultValue: PENDING,
      },
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};
