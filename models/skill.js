module.exports = function(sequelize, DataTypes) {
 const Skill = sequelize.define("Skill", {
   subject: DataTypes.STRING,
 });
 return Skill;
};