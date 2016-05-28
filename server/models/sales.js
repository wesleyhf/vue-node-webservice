/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Sales = sequelize.define('sales', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    clientId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'clients',
        key: 'id'
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('o','f','c'),
      allowNull: true,
      defaultValue: 'o'
    },
    totalValue: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'sales',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Sales.belongsTo(models.clients);
        Sales.hasMany(models.saleItems);
      }
    }
  });

  return Sales;
};
