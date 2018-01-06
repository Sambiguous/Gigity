module.exports = function(sequelize, DataTypes) {
  var Freelancers = sequelize.define("Freelancers", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    free_id: {
      type: DataTypes.VIRTUAL,
      get: function(){
        return "fr" + this.getDataValue('id');
      }
    },
    f_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    l_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    rate: {
      type: DataTypes.DECIMAL(6, 2),
      defaultValue: 0,
    }}
  );
  return Freelancers;
};
