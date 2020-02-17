const { getNames } = require("./name-generator");







const names = getNames();

setTimeout(() => {
    console.log(names);
}, 3000);



