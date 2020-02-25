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

// const checkedUsername = $('input[type="radio"]:checked').val();
// const strengths = $(".strength");
// const skills = $(".skill");

// strengths.on("click", function (event) {
//     event.preventDefault();
//     $(this).attr("style", "background-color: #F2F2F2;");
// });

// skills.on("click", function (event) {
//     event.preventDefault();
//     $(this).attr("style", "background-color: #F2F2F2;");
// });
