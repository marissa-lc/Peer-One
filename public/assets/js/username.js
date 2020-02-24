const createAccount = $(".create-account");

createAccount.on("click", function() {
    $.ajax("/username", {
        type: "GET",
        data: names
      });
});