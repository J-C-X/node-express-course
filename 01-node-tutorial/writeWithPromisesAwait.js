const { writeFile, readFile } = require('fs').promises;

async function writer() {
  try {
    await writeFile('output.txt', 'Line 1\nLine 2\nLine 3\n');
    console.log('File successfully written!');
  } catch (error) {
    console.error('Error writing file:', error);
  }
}

async function reader() {
  try {
    const data = await readFile('output.txt', 'utf8');
    console.log('File contents:');
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

async function readWrite() {
  try {
    await writer();
    await reader();
  } catch (error) {
    console.error('Error:', error);
  }
}

readWrite();
