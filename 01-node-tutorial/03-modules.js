//Modules

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// ** Every file by defualt is a module --> in modules were responsible for what we're sharing
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
/*console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)  
*/

/* -- Initial Code -- 
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
*/