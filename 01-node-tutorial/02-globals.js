// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// *** Global Variables: you can access them anywhere in the application   
console.log("__dirname: " + __dirname);
console.log("MY_VAR: " + process.env.MY_VAR);
//cmd command: export MY_VAR="Hi there!" && node 02-globals.js

/*
console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000)  
*/