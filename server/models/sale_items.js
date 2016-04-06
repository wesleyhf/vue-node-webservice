/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var SaleItems = sequelize.define('sale_items', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sales_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'sales',
        key: 'id'
      }
    },
    product_id: {
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
    unitary_value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'sale_items',
    timestamps: false
  });

  return SaleItems;
};
