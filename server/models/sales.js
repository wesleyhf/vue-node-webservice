/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Sales = sequelize.define('sales', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    client_id: {
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
    total_value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'sales',
    timestamps: false
  });

  return Sales;
};
