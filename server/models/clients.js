/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Clients = sequelize.define('clients', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM('m','f'),
      allowNull: true,
      defaultValue: 'm'
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'clients',
    timestamps: false
  });

  return Clients;
};
