/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('skills', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'ID'
		},
		subject: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true,
			field: 'subject'
		}
	}, {
		tableName: 'skills'
	});
};
