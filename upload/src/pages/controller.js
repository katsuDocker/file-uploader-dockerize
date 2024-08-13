const HomePage = require('./main')
const UploadPage = require('./upload')

async function PageController(app, upload, path) {
  app.get('/', (req, res) => {
    HomePage(req, res)
  })

  app.post('/upload', upload.single('file'), (req, res) => {
    UploadPage(req, res, path)
  })
}

module.exports = PageController
