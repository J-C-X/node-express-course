const { writeFileSync, readFileSync } = require('fs');

  // Write 3 lines to a file with append flag
  writeFileSync('./answers/temporary/fileA.txt', 'Line 1\n', { flag: 'w' });  // 'w' to overwrite or create new file
  writeFileSync('./answers/temporary/fileA.txt', 'Line 2\n', { flag: 'a' });  // 'a' to append
  writeFileSync('./answers/temporary/fileA.txt', 'Line 3\n', { flag: 'a' });  // 'a' to append

  // Read the file
  const data = readFileSync('./answers/temporary/fileA.txt', 'utf8');

  // Log the contents to the console
  console.log(data);


/* -- Initial Code -- 
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// ** if the file is not there then node will create one and if it is already there then node will 
// override the values
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' } // set equal to 'a' so node will append
)

console.log('done with this task')
console.log('starting the next one')
*/