const config = require('config')
const argv   = require('./webpack.argv')
const projectConfig = config[argv.name] || {}

module.exports = {
  ENV_CONFIG: JSON.stringify(projectConfig),
  NAME: JSON.stringify(argv.name),
  VERSION: JSON.stringify('v1.0.0'),
}
