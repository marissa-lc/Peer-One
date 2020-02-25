const newPost = $(".new-post");
const saveResponse = $(".save");
const logout = $(".logout-icon");

newPost.on("click", function (event) {
    var addPost = {
        userId: 1,
        skillId: 1,
        body: $(".new-body").val().trim()
    };

    console.log (addPost.body);

    $.ajax("/api/posts", {
        type: "POST",
        data: addPost
      }).then(function() {
        // Reload the page to get the updated list
        window.location.replace("http://localhost:8080/feed");
      });
});

// saveResponse.on("click", function(event) {
//     var addResponse = {
//         userId: 1,
//         replyToId: 1,
//         body: $(".response-body").val().trim()
//     };

//     console.log (addResponse.body);

//     $.ajax("/api/posts", {
//         type: "POST",
//         data: addResponse
//       }).then(function() {
//         // Reload the page to get the updated list
//         window.location.replace("http://localhost:8080/feed");
//       });
// });

// logout.on("click", function (event) {
//     $.ajax("/api/logout", {
//         type: "GET"
//       });
// })