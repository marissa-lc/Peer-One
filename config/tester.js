const Query = require("./query");

const query = new Query();

query.select(
 [
  "replies.ID",
  "username",
  "replies.body"
 ])
 .from(
  {
   name: "posts",
   as: "replies"
  }
 )
 .innerJoin("posts", "posts.ID", "replies.reply_to_id")
 .innerJoin("users", "users.ID", "replies.user_id")
 .go(result => console.log(result));