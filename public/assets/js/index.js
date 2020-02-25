$(document).ready(function() {
    const letsGoLink = $("#lets-go");

    $(letsGoLink).on("click", function(event) {
        alert("this is happening before the link is followed.");
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
