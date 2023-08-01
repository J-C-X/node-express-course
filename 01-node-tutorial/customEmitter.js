const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

customEmitter.on('countdown', (count) => {
  console.log(`Countdown: ${count}`);
});

// Emitting the events
customEmitter.emit('greet', 'Jose');
customEmitter.emit('countdown', 5);

// Emitting the 'greet' event every 2 seconds
setInterval(() => {
  customEmitter.emit('greet', 'JC');
}, 2000);
