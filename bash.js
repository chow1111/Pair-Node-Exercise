const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if(cmd === 'pwd') {
      pwd();
  } else if(cmd === 'fs') {
    ls();
  }
  else if (cmd.split(' ')[0] === 'cat') {
    let fileName = cmd.split(' ')[1];
    cat(fileName);
  }
  else {
  process.stdout.write('You typed: ' +cmd);
  process.stdout.write('\nprompt > ');
  }
});
