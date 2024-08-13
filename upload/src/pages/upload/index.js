const fs = require('fs')
const nameRandom = require('../../modules/random')

async function statusFunction(file, path) {
  let message

  if (file != undefined) {
    let parse = await nameRandom(path)
    let fileType = file.originalname.split('.').reverse()[0]

    fs.renameSync(
      `${path}/${file.path}`,
      `${path}/uploads/${parse}.${fileType}`
    )

    message = {
      status: 1,
      message: 'upload complete',
      payload: {
        url: `${process.env.CDN_URI}${parse}.${fileType}`,
      },
    }
  } else {
    message = {
      status: 0,
      message: 'upload incomplete',
    }
  }

  return message
}

async function UploadPage(req, res, path) {
  const rtnPayload = {
    status: await statusFunction(req.file, path),
  }

  res.send(rtnPayload)
}

module.exports = UploadPage
