const checkedUsername = $('input[type="radio"]:checked').val();
const strengths = $(".strength");
const skills = $(".skill");

strengths.on("click", function (event) {
    event.preventDefault();
    $(this).attr("style", "background-color: #F2F2F2;");
});

skills.on("click", function (event) {
    event.preventDefault();
    $(this).attr("style", "background-color: #F2F2F2;");
});
