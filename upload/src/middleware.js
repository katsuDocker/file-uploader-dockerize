const bodyParser = require('body-parser')

function Middleware(app, exp) {
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  )

  app.use(exp.static('static'))
}

module.exports = Middleware
