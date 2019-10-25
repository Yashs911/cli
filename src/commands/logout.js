const {Command} = require('@oclif/command')
const loginHelper = require('../helpers/auth')

class LogoutCommand extends Command {
  async run() {
    // Blank out the key to force a logout
    loginHelper.logout()
    this.log('Successfully logged out from Chec.io')
  }
}

LogoutCommand.description = `Log out of your account
Log out of your account and remove the local copy of your API keys.
`
module.exports = LogoutCommand
