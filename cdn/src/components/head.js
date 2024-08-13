export function headComponent(title, extended) {
  const head = `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | dethz CDN</title>

  <link rel="shortcut icon" href="https://suphakit.net/favicon.png" type="image/png">
  <link rel="stylesheet" href="/css/main.css">
  ${extended}
</head>
`

  return head
}
