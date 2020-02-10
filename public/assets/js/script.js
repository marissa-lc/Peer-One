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
    signUpDiv.html(usernamePartial.html());
})

// end sign up for account

// sendbird

//initialize
const APP_ID = '4F2E0226-1F5B-46EC-87A8-E30B3F167FBC';
const sb = new SendBird({appId: APP_ID});

//connect to sb server
sb.connect(USER_ID, function(user, error) {
    if (error) {
        return;
    }
});

//create a new open channel
sb.OpenChannel.createChannel(function(openChannel, error) {
    if (error) {
        return;
    }
});

//enter the channel
sb.OpenChannel.getChannel(CHANNEL_URL, function(openChannel, error) {
    if (error) {
        return;
    }

    openChannel.enter(function(response, error) {
        if (error) {
            return;
        }
    })
});

//send a message to the channel
openChannel.sendUserMessage(MESSAGE, DATA, CUSTOM_TYPE, function(message, error) {
    if (error) {
        return;
    }
});
