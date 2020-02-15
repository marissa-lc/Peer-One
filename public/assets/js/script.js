// index.html - sign up for account
const letsGo = $(".lets-go");
const signUpDiv = $(".sign-up");
const createAccount = $(".create-account");
const createPartial = $(".create-partial");
const continueBtn = $(".continue-one");
const usernamePartial = $(".username-partial");
const continue2Btn = $(".continue-two");
const strengthsPartial = $(".strengths-partial");
const strengths = $(".strength");

createAccount.on("click", function (event) {
    event.preventDefault();
    signUpDiv.hide();
    createPartial.show();
});

continueBtn.on("click", function (event) {
    event.preventDefault();
    createPartial.hide();
    usernamePartial.show();
});

continue2Btn.on("click", function (event) {
    event.preventDefault();
    usernamePartial.hide();
    strengthsPartial.show();
});

strengths.on("click", function (event) {
    event.preventDefault();
    $(this).attr("style", "background-color: #F2F2F2;");
});
// end sign up for account

// feed
// $.get("/api/posts", function (data) {
//         for (var i = 0; i < data.length; i++) {
//             var row = $("<div>");
//             row.addClass("post");
//             row.append("<p>" + data[i].body + "</p>");
//             $(".post-area").prepend(row);
//         }
// });

// end feed

