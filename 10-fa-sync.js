// // naem of the module is FS 
// // in async and sync()
// const {readFileSync, writeFileSync} = require('fs');

// const first  = readFileSync('./content/first.txt', 'utf8');
// const second  = readFileSync('./content/second.txt', 'utf8');


// console.log(first, second)

// writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, {flag: 'a'})


const any = require('fs');
// another vid
console.log('start');
// another vid
const pelu = any.readFileSync('./content/first.txt', 'utf8');
const biju = any.readFileSync('./content/second.txt', 'utf8');
console.log(pelu, biju);

const neww = any.writeFileSync('./content/navu.txt', `write the novu ${pelu}, ${biju}`);
console.log(neww);

// another vid
console.log('Done with The Task');
console.log('Starting the Next one');



















