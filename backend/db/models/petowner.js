const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PetOwner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  const attributes = {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Owners', // название таблицы!11
        key: 'id',
      },
    },
    petId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Pets', // название таблицы!11
        key: 'id',
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
    modelName: 'PetOwner',
    tableName: 'PetOwners',
  };

  PetOwner.init(attributes, options);
  return PetOwner;
};
