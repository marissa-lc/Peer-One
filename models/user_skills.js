/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('userSkills', {
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'users',
				key: 'ID'
			},
			field: 'user_id'
		},
		skillId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'skills',
				key: 'ID'
			},
			field: 'skill_id'
		}
	}, {
		tableName: 'user_skills'
	});
};
