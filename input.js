let connection; // stores the active TCP connection object;
const stdin = process.stdin;

const setupInput = (conn) => {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume()
  handleUserInput()
  return stdin;
};

const handleUserInput = () => {

  stdin.on('data', (key) => {
    
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.stdout.write('\n');
      process.exit();
    }
    if (key === 'w') {
      connection.write('Move: up');
    }
    if (key === 's') {
      connection.write('Move: down');
    }
    if (key === 'a') {
      connection.write('Move: left');
    }
    if (key === 'd') {
      connection.write('Move: right');
    }
    
    if (key === 'q') {
      connection.write('Say: THE DISRESPECT');
    }
  });
}

module.exports = { setupInput }
