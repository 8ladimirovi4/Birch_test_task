const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    static associate({ PetType, Owner, PetOwner }) {
      Pet.PetType = Pet.belongsTo(PetType, { foreignKey: 'typeId' });
      Pet.Owners = Pet.belongsToMany(Owner, {
        through: PetOwner,
        foreignKey: 'petId',
        otherKey: 'ownerId',
      });
    }
  }

  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    typeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PetTypes',
        key: 'id', // по умолчанию 'id', можно не писать
      },
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
    modelName: 'Pet',
    tableName: 'Pets',
  };

  Pet.init(attributes, options);
  return Pet;
};
