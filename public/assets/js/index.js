$(document).ready(function () {
    $("#lets-go").on("click", function (event) {
        logIn({
            email: $("#login-email").val().trim(),
            password: $("#login-password").val().trim()
        }, function (err) {
            if (err) {
                return console.log(err);
            }
        });
    });
});

