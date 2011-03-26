var fs       = require('fs');
var source   = "";

// This assigns to the jsParser global
// Less Than Awesome
require('./lib/javascriptParser.js');

source = "" + fs.readFileSync('./test.js');

var ast = jsParser.parse(source);
console.dir(ast);

var elem = ast.elements[0].declarations[0];
console.dir(elem);

console.dir( elem.value.elements );

