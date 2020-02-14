var WordPOS = require('wordpos'),
    wordpos = new WordPOS();

    const promise1 = wordpos.randAdjective();
    const promise2 = wordpos.randNoun();
    const promise3 = Math.floor(Math.random() * 100);
    // const promise3 = new Promise(function(resolve, reject) {
    //   setTimeout(resolve, 100, 'foo');
    // });
    
    Promise.all([promise1, promise2, promise3]).then(function(values) {
      console.log(values);
    });

// function generateName() {
//     nameList = [];
//     var i;
//     for (i = 0; i < 10; i++) {
//         const adj = wordpos.randAdjective();
//         const noun = wordpos.randNoun();
//         const num1 = Math.floor(Math.random() * 100);
//         const result = adj + noun + num1;
//         nameList.push(result); 
//     }
//     console.log(nameList);
// };

// generateName();



// x.then(function (result) {
//     console.log(result);
// })

