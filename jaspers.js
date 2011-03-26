var fs       = require('fs');
var source   = "";

// This assigns to the jsParser global
// Less Than Awesome
require('./lib/javascriptParser.js');

fs.readFile('test.js', function (err, data) {
  if (err) throw err;
  source = data;
});

jsParser.parse(source);
