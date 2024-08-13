export function Middleware(app, express) {
  app.use(express.static('static'))
}
