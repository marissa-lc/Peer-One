/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('posts', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'ID'
		},
		body: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'body'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'users',
				key: 'ID'
			},
			field: 'user_id'
		},
		skillId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'skills',
				key: 'ID'
			},
			field: 'skill_id'
		},
		replyToId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'posts',
				key: 'ID'
			},
			field: 'reply_to_id'
		}
	}, {
		tableName: 'posts'
	});
};
