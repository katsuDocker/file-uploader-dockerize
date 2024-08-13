import { headComponent } from '../../components/head'

function page() {
  const head = `<link rel="stylesheet" href="/css/index.css">`

  const body = `<!DOCTYPE html>
<html lang="en">
  ${headComponent('huh', head)}
  <body>
    <div class="main-container">
      <h1>
        why the fuck are u here?
      </h1>
    </div>
  </body>
</html>
`

  return body
}

export function HomePage(app) {
  app.get('/', (req, res) => {
    res.send(page())
  })
}
