module.exports = function(plop) {
  plop.setHelper('upperCaseFL', text => text.charAt(0).toUpperCase() + text.slice(1))
}
