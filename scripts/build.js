const execSync = require('child_process').execSync
const inInstall = require('in-publish').inInstall

if (inInstall())
  process.exit(0)

const exec = (command, env) =>
  execSync(command, { stdio: 'inherit', env })

exec('npm run build-lib')
