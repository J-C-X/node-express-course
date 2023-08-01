const prompter = require('./prompter.js');
const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

let randomNumber = Math.floor(Math.random() * 100) + 1;  // generate a random number between 1 and 100
let guessResult = '';  // Here we'll store the result of the guess

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

const form = () => {
  // Here we use string interpolation to insert the result of the guess into the HTML
  return `
    <body>
      <p>Guess a number between 1 and 100:</p>
      <p>${guessResult}</p>
      <form method="POST">
        <input type="number" name="guess" min="1" max="100" required>
        <button type="submit">Guess</button>
      </form>
    </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      const guess = Number(body.guess);
      if (guess === randomNumber) {
        guessResult = 'Congratulations! You guessed the number.';
        // regenerate the random number for the next game
        randomNumber = Math.floor(Math.random() * 100) + 1;
      } else if (guess < randomNumber) {
        guessResult = 'Your guess is too low.';
      } else {
        guessResult = 'Your guess is too high.';
      }
      res.writeHead(303, {Location: "/"});
      res.end();
    });
  } else {
    res.end(form());
  }
});

// Add an event listener for the "request" event
server.on('request', (req) => {
    console.log("event received:", req.method, req.url);
  });

server.listen(3000);
console.log("The server is listening on port 3000.");
// Hello