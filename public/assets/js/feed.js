// index.html - sign up for account
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
$.get("/api/posts", function (data) {
    if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
            var row = $("<div>");
            row.addClass("post");
            row.append("<p>" + data[i].body + "</p>");
            $(".post-area").prepend(row);
        }
    }
});

// end feed

// sendbird

//initialize
const APP_ID = '4F2E0226-1F5B-46EC-87A8-E30B3F167FBC';
const sb = new SendBird({ appId: APP_ID });

//connect to sb server
sb.connect(USER_ID, function (user, error) {
    if (error) {
        return;
    }
});

//create a new open channel
sb.OpenChannel.createChannel(function (openChannel, error) {
    if (error) {
        return;
    }
});

//enter the channel
sb.OpenChannel.getChannel(CHANNEL_URL, function (openChannel, error) {
    if (error) {
        return;
    }

    openChannel.enter(function (response, error) {
        if (error) {
            return;
        }
    })
});

//send a message to the channel
openChannel.sendUserMessage(MESSAGE, DATA, CUSTOM_TYPE, function (message, error) {
    if (error) {
        return;
    }
});
// end sendbird