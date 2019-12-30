const path = require('path')
var fs = require('fs')

module.exports = function(plop) {
  plop.setPartial(
    'mediaQueryPartial',
    `${fs.readFileSync(path.resolve(__dirname, './mediaQueryPartial.hbs'))}`,
  )
}
