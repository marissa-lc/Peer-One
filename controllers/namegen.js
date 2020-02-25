const Wordpos = require("wordpos");


const getNames = function (callback) {
    const wordpos = new Wordpos();
    const names = [];

    // Start recursive execution of function
    wordRecurse();

    // Define a recursieve function. It gets a random name from the name generator API and adds it to the names array
    // If the array has fewer than five names in it, the function calls itself, getting another random name and again adding it to the array
    // Once the array has five names in it, the if statement evaluates to false and the function sends the response and exits
    function wordRecurse() {
        wordpos.randAdjective(function (adj) {
            wordpos.randNoun(function (noun) {
                const username = adj[0].toUpperCase() + adj.slice(1) +
                    noun[0].toUpperCase() + noun.slice(1) +
                    (Math.floor(Math.random() * 100)).toString();
                names.push(username);

                if (names.length < 5) {
                    return wordRecurse();
                }
                return callback(names);
            });
        });
    }

};

module.exports = getNames;