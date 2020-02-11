module.exports = function(sequelize, DataTypes) {
 const Post = sequelize.define("Post", {
   message: DataTypes.STRING,
 });
 return Post;
};