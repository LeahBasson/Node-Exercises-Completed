import { Person } from './Person.js'
const Person1 = new Person ('Leah',  'Basson', 'leahbasson101@gmail.com');
const Person2 = new Person ('Jamin',  'Langeveldt', 'langeveldt20jamin@gmail.com');
const Person3 = new Person ('Reece',  'Basson', 'reecebasson@gmail.com');

console.log(Person1, Person2, Person3 );

// import fs from 'fs'

// fs.writeFile('data.txt', 'Hello World', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
// });

// fs.writeFile('data.txt', 'Hello World', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
// });
      
// fs.appendFile('data.txt', '!', function (err) {
//     if (err) throw err;
//     console.log('Updated!');
// });



// import {sum} from './Addition.js'
// console.log(sum(4, 4));
// console.log(sum(10, 5));


// Core Module Example
// const { log } = require('console')
// const http = require('http')
// const port = 4000
// http.createServer ((req, res) => {
//     res.writeHead(200, {'Content-type':
//         'text/plain' })
//         res.end(`
//             Hello Developers, 
//             How are you doing?
            
//             Kind regards,
//             Leah Basson`)
//     }).listen(port, () => {
//         console.log(`Server is running on port ${port}`);
//     })

// const os = require('os')
// console.log('===============');
// console.log({
//         osType: os.type(),
//         release: os.release(),
//         memory: os.totalmem(),
//         remainMemory: os.freemem()
// });

// console.log("Hello there");
// console.log("Leah");
// console.log(globalThis);
// console.log(__dirname);
// console.log(__filename);