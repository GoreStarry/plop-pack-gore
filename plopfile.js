module.exports = plop => {
  // helpers
  plop.load('./helpers/setIfEqualHelper.js', {}, { helpers: true })
  plop.load('./helpers/setUpperCaseForFirstLetterHelper.js', {}, { helpers: true })

  // partials
  plop.load('./templates/Styles/partials/setPartialStyles.js', {}, { partials: true })

  // generators (use load will not inherent the loaded helper )
  require('./templates/ReactJS/index.js')(plop)
  require('./templates/GSAP/index.js')(plop)
}
