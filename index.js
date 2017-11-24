const { execSync } = require('child_process');

function run(commands) {
  if (!commands.length) {
    return false;
  }

  let command = 'node ./bin/ares-' + commands[0] + '.js'
  if (commands.length >= 2) {
    commands.shift()
    command += ' ' + commands.join(' ');
  }

  console.log(command)
  const subject = execSync(command, {cwd: process.cwd()});
  return subject;
}

module.exports = run;
