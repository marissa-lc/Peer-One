const createAccount = $(".create-account");
const signUpDiv = $(".sign-up");
const createPartial = $(".create-partial");

createAccount.on("click", function(event) {
    event.preventDefault();
    signUpDiv.html(createPartial.html());
});