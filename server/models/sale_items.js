/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var SaleItems = sequelize.define('saleItems', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    saleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'sales',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    unitaryValue: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'saleItems',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        SaleItems.belongsTo(models.sales);
        SaleItems.belongsTo(models.products);
      }
    }
  });

  return SaleItems;
};
