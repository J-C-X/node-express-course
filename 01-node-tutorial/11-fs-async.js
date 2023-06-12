const { writeFile } = require('fs');

console.log("at start");
// Nesting Callback functions required to ensure operations happen in the correct order
writeFile(
  './answers/temporary/fileB.txt', 
  'This is line 1\n', 
  (err) => {
  if (err) {
    console.log("This error happened: ", err);
  } else {
    console.log("Line 1");

    writeFile(
      './answers/temporary/fileB.txt', 
      'This is line 2\n', 
      { flag: 'a' }, 
      (err) => {
      if (err) {
        console.log("This error happened: ", err);
      } else {
        console.log("Line 2");

        writeFile(
          './answers/temporary/fileB.txt', 
          'This is line 3\n', 
          { flag: 'a' }, 
          (err) => {
          if (err) {
            console.log("This error happened: ", err);
          } else {
            console.log("Line 3");
          }
        });
      }
    });
  }
});

console.log('starting next task')
