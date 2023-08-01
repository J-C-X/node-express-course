const { writeFile, readFile } = require('fs').promises;

writeFile('output.txt', 'Line 1\n')
  .then(() => {
    return writeFile('output.txt', 'Line 2\n', { flag: 'a' }); // Append to the file
  })
  .then(() => {
    return writeFile('output.txt', 'Line 3\n', { flag: 'a' }); // Append to the file
  })
  .then(() => {
    return readFile('output.txt', 'utf8');
  })
  .then((data) => {
    console.log('File contents:');
    console.log(data);
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
  });
