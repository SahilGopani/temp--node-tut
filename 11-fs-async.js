const {readFile, writeFile} = require('fs')

// new vid
console.log("start");
// new vid

readFile('./content/first.txt','utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err, result) =>{
        if (err) {
            console.log(err);
            return;
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the Result VALA ${first}, ${second}`, {flag:'a'}, (err,result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
            console.log('Done with This task');
        })
    })
})
console.log('starting next task');



// const {readFile, writeFile} = require('fs');

// readFile ('./content/first.txt','utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const first = result;
//     console.log(first);
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const second = result;
//     console.log(second)
// })

// })

// // readFile('./content/second.txt', 'utf8', (err, result) => {
// //     if (err) {
// //         console.log(err);
// //         return;
// //     }
// //     const second = result;
// //     console.log(second)
// // })













