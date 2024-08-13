const HeadComponents = require('../../components/head')

function HomePage(req, res) {
  const head = `<link rel="stylesheet" href="/css/index.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.12.4/dist/sweetalert2.min.css">`

  const content = `<!DOCTYPE html>
<html lang="en">
  ${HeadComponents(head)}
  <body>
    <div class="main-container">
      <div class="card-upload">
        <input type="file" id="fileInput" onchange="update()" hidden />
        <div id="file-container">
          <p id="fileName">-- File Name --</p>
          <label for="fileInput">Browse</label>
        </div>
        <div id="res-container" class="hidden">
          <p id="link-res"></p>
          <button id="another" onclick="another()">
            Upload Another?
          </button>
        </div>
        <progress id="progress" min="0" max="100" value="0" class="hidden"></progress> 
        <button id="upload" type="submit" onclick="upload()">Upload!!</button>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.12.4/dist/sweetalert2.all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="/js/upload.js"></script>
  </body>
</html>
`

  res.send(content)
}

module.exports = HomePage
