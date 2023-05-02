// Require: DataTypes to create the models
const { DataTypes } = require("sequelize");

// Exports: a function that defines the model with the connection to sequelize
module.exports = (sequelize) => {
  // Defines: the model (model name, attributes )
  sequelize.define(
    "purchases",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      articles: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },

      payment_status: {
        type: DataTypes.ENUM("pending", "approved", "rejected"),
        defaultValue: "pending",
      },

      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id_User",
        },
      },
    },

    // Invalidates: Date and time fields
    { timestamps: false }
  );
};
