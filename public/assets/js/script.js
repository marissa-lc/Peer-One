// index.html - sign up for account
const signUpDiv = $(".sign-up");
const createAccount = $(".create-account");
const createPartial = $(".create-partial");
const continueBtn = $(".continue-one");
const usernamePartial = $(".username-partial");

createAccount.on("click", function(event) {
    event.preventDefault();
    signUpDiv.html(createPartial.html());
});

continueBtn.on("submit", function(event) {
    event.preventDefault();
    createPartial.html(usernamePartial.html());
})

// end sign up for account