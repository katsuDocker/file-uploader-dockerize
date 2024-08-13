const PageController = require('./pages/controller')

async function Routes(app, upload, path) {
  PageController(app, upload, path)
}

module.exports = Routes
