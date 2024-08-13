import express from 'express'
import * as env from 'dotenv'
import ezServe from 'ez-serve'

import { Route } from './src/routes'
import { Middleware } from './src/middleware'

env.config()
const app = express()
const PORT = process.env.PORT || 3000

Middleware(app, express)
Route(app)

ezServe(app, PORT)
