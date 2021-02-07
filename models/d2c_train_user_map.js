/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('d2CTrainUserMap', {
    trainId: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'train_id'
    },
    userId: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      references: {
        model: 'd2c_user_details',
        key: 'user_id'
      },
      field: 'user_id'
    },
    ticketStatus: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      field: 'ticket_status'
    },
    seatNo: {
      type: DataTypes.STRING(11),
      allowNull: false,
      field: 'seat_no'
    },
    pnr: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      field: 'pnr'
    }
  }, {
    tableName: 'd2c_train_user_map'
  });
};
