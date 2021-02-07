/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('d2CUserPaymentsMap', {
    mapId: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'map_id'
    },
    pnrNumber: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      field: 'pnr_number'
    },
    amount: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      field: 'amount'
    },
    status: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      field: 'status'
    }
  }, {
    tableName: 'd2c_user_payments_map'
  });
};
