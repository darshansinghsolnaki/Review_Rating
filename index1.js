// const add = (val, val2) => {
//     const sum = val+ val2
//     return sum
// }

// const res = add(30,32 )
// console.log(res);

// const show = () => {
//     console.log('first');

//     const res = add(20,40)
//     console.log(res);

//     } 
// const add = (first, second) =>{
//     const add = first+ second
//     return add
// }



// let i = 13
// while (i>=1) {
//     console.log(i);
//     i = i-3;
// }

// let i = 13
// do {
//         console.log(i);
//     i= i-3
// } while (i >=1 );



// let letters = ["a","b","c","d","e"]
// for (const letter of letters) {
// //     console.log(letters);   
// // }


// for (let i= 0; i <=10; i=i-3) {
//     console.log(i);
// }

// 13  10  7  4  1 



// function functionname() {


//     var a = 1
//     if (true) {
//         var b = 2
//         console.log(a);
//     }
// }
// functionname()

// console.log(a);
// console.log(b);
// console.log(a);



// var object = { 
//     name : "darsan",
//     fullname : "singh solanki ",
//     class : "codersid",
//     location : "indore plasiya",
//     age: 23
// }
// for(const obj in object){

//     console.log(`Keys Of Object  :: ${obj} >> And: >>> Value Of Key ::    ${object[obj]} `);
// }


// Array  

// const  arrays = [ 23,`sdarahsn`,13009, true, "solanki", null]
// // console.log(arrays);
// for(var i = 0; i<=arrays.length; i++ ){
//     console.log(arrays[i]);
// }


// const  arrays = [ 23,`sdarahsn`,13009, true, "solanki", null]
// arrays.push([2,54,"darshan"])
// console.log(arrays);

// const  arrays = [ 23,`sdarahsn`,13009, true, "solanki", null]
// arrays.splice(3,2,"adsrtahsa","SSKSDASD")
// console.log(arrays);


//////////////// CREATE BUFFER Chunk //////////////////
// var buffer = Buffer.alloc(10);
// // console.log(buffer);
// buffer.write('hello this iis the darsgan')
// console.log(buffer);



// var fs = require('fs')
// var http = require('http');
// http.createServer(function (req, res) {
//     var content = ''
//     var reader = fs.createReadStream('demo.txt')
//     reader.setEncoding('utf-8')
//     reader.on('error', function (err) {
//         console.log(err);
//     }).on('data', function (chunk) {
//         content += chunk  // content = chunk + content
//     }).on('end', function (err) {
//         res.on('erro', function (err) {
//             console.log(err);
//         })
//         res.setHeader('200', { 'content-Type': 'plain/text' })
//         res.write(content)
//         res.end()
//     })
// }).listen(8000, () => {
//     console.log('thiss is the srver texting onl for buudeer');
// })



var fs = require('fs')
var http = require('http');

http.createServer(function (req, res) {
var content = ''
        var content = "hello this is node js whitestream"
        var writer = fs.createReadStream('demo.txt')
        writer.write(content, 'utf-8')
        writer.end()
        writer.on('finish', function () {
            console.log('data write succesfully');
        }).on('error', function (err) {
            console.log(err);
    })
})
res.end()
    }).listen(8080, () => {
        console.log('thiss is the srver texting onl for buudeer');
    })