/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'ID'
		},
		username: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true,
			field: 'username'
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true,
			field: 'email'
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'password'
		}
	}, {
		tableName: 'users'
	});
};
