/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    categoryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'products',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Products.belongsTo(models.categories);
        Products.hasMany(models.sale_items);
      }
    }
  });

  return Products;
};
