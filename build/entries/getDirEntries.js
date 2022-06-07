const fs = require('fs')
const path = require('path')

const src = function (...paths) {
  return path.join(__dirname, '../../src', ...paths)
}

module.exports = function (name) {
  const dir = src('./entries/' + name)
  const scripts = fs.readdirSync(dir)

  return scripts.reduce((obj, jsFile) => {
    const entryName = jsFile.split('.')[0]
    obj[name + '/' + entryName] = path.resolve(dir, jsFile)
    return obj
  }, {})
}