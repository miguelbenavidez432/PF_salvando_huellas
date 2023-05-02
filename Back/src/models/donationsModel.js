// Require: DataTypes to create the models
const { DataTypes } = require("sequelize");

// Exports: a function that defines the model with the connection to sequelize
module.exports = (sequelize) => {
  // Defines: the model (model name, attributes )
  sequelize.define(
    "donations",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      unit_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },

      status: {
        type: DataTypes.ENUM("pending", "completed", "cancelled"),
        defaultValue: "pending",
        allowNull: false,
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id_User",
        },
      },
    },
    { timestamps: false }
  );
};
