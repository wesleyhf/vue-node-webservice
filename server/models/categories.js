/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Categories = sequelize.define('categories', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'categories',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Categories.hasMany(models.products);
      }
    }
  });

  return Categories;
};
