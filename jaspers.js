var fs       = require('fs');
var source   = "";
var jsParser = require('./lib/javascriptParser.js');

fs.readFile('test.js', function (err, data) {
  if (err) throw err;
  source = data;
});

jsParser.parse(source);
