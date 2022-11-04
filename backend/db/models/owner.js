const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    static associate({ Pet, PetOwner }) {
      Owner.Pets = Owner.belongsToMany(Pet, {
        through: PetOwner,
        foreignKey: 'ownerId',
        otherKey: 'petId',
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
    surname: {
      type: DataTypes.TEXT,
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
    modelName: 'Owner',
    tableName: 'Owners',
  };

  Owner.init(attributes, options);
  return Owner;
};
