const strengths = $(".strength");

strengths.on("click", function (event) {
  event.preventDefault();
  $(this).attr("style", "background-color: #F2F2F2;");
});