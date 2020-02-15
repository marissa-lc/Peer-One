var WordPOS = require('wordpos'),
    wordpos = new WordPOS();

var names = [];

const promise1 = wordpos.randAdjective();
const promise2 = wordpos.randNoun();
const promise3 = Math.floor(Math.random() * 100);

const promise4 = wordpos.randAdjective();
const promise5 = wordpos.randNoun();
const promise6 = Math.floor(Math.random() * 100);

const promise7 = wordpos.randAdjective();
const promise8 = wordpos.randNoun();
const promise9 = Math.floor(Math.random() * 100);

const promise10 = wordpos.randAdjective();
const promise11 = wordpos.randNoun();
const promise12 = Math.floor(Math.random() * 100);

const promise13 = wordpos.randAdjective();
const promise14 = wordpos.randNoun();
const promise15 = Math.floor(Math.random() * 100);
// .toUpperCase()
Promise.all([promise1, promise2, promise3]).then(function (values) {
    
    var string1 = values[0].toString();
    var stringOne = string1[0].toUpperCase() +  
    string1.slice(1);
    
    var string2 = values[1].toString();
    var stringTwo = string2[0].toUpperCase() +  
    string2.slice(1);

    var output = stringOne + stringTwo + values[2];
    console.log(output);
    names.push(output);
    console.log(names);
});

Promise.all([promise4, promise5, promise6]).then(function (values) {
    var string1 = values[0].toString();
    var stringOne = string1[0].toUpperCase() +  
    string1.slice(1);
    
    var string2 = values[1].toString();
    var stringTwo = string2[0].toUpperCase() +  
    string2.slice(1);

    var output = stringOne + stringTwo + values[2];
    console.log(output);
    names.push(output);
    console.log(names);
});

Promise.all([promise7, promise8, promise9]).then(function (values) {
    var string1 = values[0].toString();
    var stringOne = string1[0].toUpperCase() +  
    string1.slice(1);
    
    var string2 = values[1].toString();
    var stringTwo = string2[0].toUpperCase() +  
    string2.slice(1);

    var output = stringOne + stringTwo + values[2];
    console.log(output);
    names.push(output);
    console.log(names);
});

Promise.all([promise10, promise11, promise12]).then(function (values) {
    var string1 = values[0].toString();
    var stringOne = string1[0].toUpperCase() +  
    string1.slice(1);
    
    var string2 = values[1].toString();
    var stringTwo = string2[0].toUpperCase() +  
    string2.slice(1);

    var output = stringOne + stringTwo + values[2];
    console.log(output);
    names.push(output);
    console.log(names);
});

Promise.all([promise13, promise14, promise15]).then(function(values) {
    var string1 = values[0].toString();
    var stringOne = string1[0].toUpperCase() +  
    string1.slice(1);
    
    var string2 = values[1].toString();
    var stringTwo = string2[0].toUpperCase() +  
    string2.slice(1);

    var output = stringOne + stringTwo + values[2];
    console.log(output);
    names.push(output);
    console.log(names);
  });
  

module.exports=names;