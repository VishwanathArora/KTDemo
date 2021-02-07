/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('d2CUserDetails', {
    userId: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'user_id'
    },
    username: {
      type: DataTypes.STRING(11),
      allowNull: false,
      field: 'username'
    }
  }, {
    tableName: 'd2c_user_details'
  });
};
