const { connect } = require('./client');

console.log('Connecting ...');

const setupInput = () => {
  const stdin = process.stdin;
  stdin. setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume()
  handleUserInput()
  return stdin;
};

const handleUserInput = () => {

  process.stdin.on('data', (key) => {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.stdout.write('\n');
      process.exit();
    }
  });
}

setupInput();
connect();