function Serve(app, PORT) {
  app.listen(PORT, () => {
    console.log(`app started at http://localhost:${PORT}`)
  })
}

module.exports = Serve
