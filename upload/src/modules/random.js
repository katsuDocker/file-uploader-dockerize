const fs = require('fs')

const list = [
  'n',
  'u',
  'y',
  '0',
  '6',
  'r',
  '5',
  'f',
  'i',
  't',
  'l',
  '9',
  'e',
  'q',
  'c',
  'k',
  'a',
  'm',
  'j',
  '4',
  'p',
  'z',
  's',
  'h',
  'v',
  'w',
  'g',
  '7',
  '1',
  '2',
  'b',
  '3',
  'd',
  'o',
  '8',
  'x',
]

function rando() {
  let parse = ''

  for (let i = 0; i < 6; i++) {
    parse += `${list[Math.floor(Math.random() * list.length)]}`
  }

  return parse
}

async function nameRandom(path) {
  const dirData = fs.readdirSync(`${path}/uploads`)
  let parse = ''
  let status = 1

  if (dirData.length > 0) {
    // do {
    //   parse = rando()

    //   if (status == 0) {
    //     break
    //   } else {
    //     for (let i = 0; i < dirData.length; i++) {
    //       const regex = new RegExp(parse + '\\.[A-Za-z0-9]+', 'i')

    //       if (regex.test(dirData[i]) == false) {
    //         if (i == dirData.length - 1) {
    //           status = 0
    //           break
    //         }
    //       }
    //     }
    //   }
    // } while (status != 0)

    parse = rando()

    do {
      const regex = new RegExp(parse + '\\.[A-Za-z0-9]+', 'i')

      if (regex.test(JSON.stringify(dirData))) {
        parse = rando()
      } else {
        status = 0
        break
      }
    } while (status != 0)
  } else {
    parse = rando()
  }

  return parse
}

module.exports = nameRandom
