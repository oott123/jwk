var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
var processor = new Function('$', '_', 'return ' + process.argv[2])
rl.on('line', function (line) {
  console.log(processor(line));
});
