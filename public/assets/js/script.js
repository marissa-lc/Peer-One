// index.html - sign up for account
const letsGo = $(".lets-go");
const signUpDiv = $(".sign-up");
const createAccount = $(".create-account");
const createPartial = $(".create-partial");
const continueBtn = $(".continue-one");
const usernamePartial = $(".username-partial");
const checkedUsername = $('input[type="radio"]:checked').val();
const continue2Btn = $(".continue-two");
const strengthsPartial = $(".strengths-partial");
const strengths = $(".strength");
const newPost = $(".new-post");
var chatBtn = $(".chat");
var answerBtn = $(".answer");
var answerModal = $("#modal-sections")

// const {getNames} = require("../../../controllers/name-generator");
// const names = getNames();

createAccount.on("click", function (event) {
    event.preventDefault();
    signUpDiv.hide();
    createPartial.show();
});

const usernames = [$(".username1"), $(".username2"), $(".username3"), $(".username4"), $(".username5")];

continueBtn.on("click", function (event) {
    event.preventDefault();
    createPartial.hide();
    usernamePartial.show();
    // for (i=0; i<usernames.length; i++) {
    //     usernames[i].append(names[i]);
    // }
});

continue2Btn.on("click", function (event) {
    event.preventDefault();
    usernamePartial.hide();
    strengthsPartial.show();
    console.log(checkedUsername)
});

strengths.on("click", function (event) {
    event.preventDefault();
    $(this).attr("style", "background-color: #F2F2F2;");
});

newPost.on("click", function (event) {
    event.preventDefault();

    var newPost = {
        body: $(".post-body").val().trim()
    };

    console.log(newPost.body);

    $.post("/api/posts", newPost)

    .then(function() {

        var row = $("<div>");
        row.addClass("post uk-card uk-card-default uk-card-body uk-margin");
        // row.append("<p>" + newPost.username + " posted the following request: </p>");
        row.append("<h5>" + newPost.body + "</h5>");
        row.append(chatBtn);
        row.append(answerBtn);
        row.append(answerModal);
  
        $(".post-area").prepend(row);
  
      });

})

// end sign up for account


