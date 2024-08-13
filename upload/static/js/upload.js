const input = document.querySelector('#fileInput')
const fileName = document.querySelector('#fileName')
const container = document.querySelector('#file-container')
const submitButton = document.querySelector('#upload')

const progress = document.querySelector('#progress')

const result = document.querySelector('#res-container')
const link = document.querySelector('#link-res')

let payload

function update() {
  const file = input.value.split('\\').reverse()[0]

  fileName.innerHTML = `${file}`
}

function callback(returnCall) {
  payload = returnCall

  return payload
}

async function upload() {
  submitButton.classList.add('hidden')
  progress.classList.remove('hidden')

  const file = input.files[0]
  const formData = new FormData()
  formData.append('file', file)

  const call = await axios.post('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: (progressEvent) => {
      if (progressEvent.lengthComputable) {
        progress.value = Math.round(
          (progressEvent.loaded / progressEvent.total) * 100
        )
      }
    },
  })

  const resp = await call.data

  if (resp.status != 'blank') {
    Swal.fire({
      title: 'Success!',
      text: `Your upload is Success!`,
      icon: 'success',
      confirmButtonText: 'yey',
    })

    progress.classList.add('hidden')
    container.classList.add('hidden')

    result.classList.remove('hidden')
    link.innerHTML = `<a target="_blank" href="${resp.status.payload.url}">${resp.status.payload.url}</a>`
  } else {
    Swal.fire({
      title: 'Failed..',
      text: `Your upload is Failed!`,
      icon: 'error',
      confirmButtonText: 'aww..',
    })
  }
}

function another() {
  submitButton.classList.remove('hidden')
  container.classList.remove('hidden')

  result.classList.add('hidden')
}
