/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('d2CTrainDetails', {
    trainId: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'train_id'
    },
    trainName: {
      type: DataTypes.STRING(11),
      allowNull: false,
      field: 'train_name'
    },
    noOfSeats: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      field: 'no_of_seats'
    }
  }, {
    tableName: 'd2c_train_details'
  });
};
