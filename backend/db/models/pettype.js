const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PetType extends Model {
    static associate({ Pet }) {
      PetType.Pets = PetType.hasMany(Pet, { foreignKey: 'typeId' });
    }
  }

  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    emoji: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };

  const options = {
    sequelize,
    modelName: 'PetType',
    tableName: 'PetTypes',
  };

  PetType.init(attributes, options);
  return PetType;
};
