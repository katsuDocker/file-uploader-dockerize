function HeadComponents(headAddons) {
  const content = `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>File Uploader | Dethz</title>

  <link rel="shortcut icon" href="https://suphakit.net/favicon.png" type="image/png">
  <link rel="stylesheet" href="/css/main.css">

  ${headAddons != undefined ? headAddons : ''}
</head>`

  return content
}

module.exports = HeadComponents
