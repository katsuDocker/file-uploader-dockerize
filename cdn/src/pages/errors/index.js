import { headComponent } from '../../components/head'

function page() {
  const head = `<link rel="stylesheet" href="/css/error.css">`

  const body = `<!DOCTYPE html>
<html lang="en">
${headComponent('Error: Not Found', head)}
<body>
  <div class="main-container">
    <div class="text-container">
      <h1>
        Error: Not Found
      </h1>
      <div class="sub-container">
        <h3>
          There's nothing here bro..
        </h3>
        <button onclick="history.back()">
          &lt; go back
        </button>
      </div>
    </div>
  </div>
</body>
</html>`

  return body
}

export function ErrorPage(app) {
  app.get(['*', '*/**'], (req, res) => {
    res.send(page())
  })
}
