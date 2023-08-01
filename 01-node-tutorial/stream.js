const { createReadStream } = require('fs');

const filePath = '../content/big.txt';
const highWaterMarks = [16, 64, 80];

function processStream(highWaterMark) {
  let counter = 0;

  const readStream = createReadStream(filePath, { encoding: 'utf8', highWaterMark });

  readStream.on('data', (chunk) => {
    counter++;
    console.log(`Received chunk #${counter}`);
  });

  readStream.on('end', () => {
    console.log(`\nReceived all chunks. Total chunks: ${counter}`);
  });

  readStream.on('error', (error) => {
    console.error('Error occurred:', error.message);
  });
}

// Test program for different values of highWaterMark
for (const highWaterMark of highWaterMarks) {
  console.log(`\n--- Testing with highWaterMark: ${highWaterMark} ---`);
  processStream(highWaterMark);
}
