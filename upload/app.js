const exp = require('express')
const multer = require('multer')
require('dotenv').config()

const Middleware = require('./src/middleware')
const Routes = require('./src/route')
const Serve = require('./src/serve')

const app = exp()
const upload = multer({ dest: './uploads' })
const PORT = process.env.PORT || 3000

Middleware(app, exp)
Routes(app, upload, __dirname)
Serve(app, PORT)
