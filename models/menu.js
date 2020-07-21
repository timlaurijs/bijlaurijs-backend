"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      menu.hasMany(models.image)
    }
  }
  menu.init(
    {
      item: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "menu",
    }
  )
  return menu
}
