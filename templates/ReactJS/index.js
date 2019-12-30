const path = require('path')
const { destinationpath } = require('yargs').argv

const USE_SCSS_MODULE = 'scss-module'
const USE_PURE_CSS = 'css'
const DESTINATION_PATH = `${destinationpath}/{{name}}`

module.exports = function(plop) {
  // helpers
  // plop.load('../../helpers/setUpperCaseForFirstLetterHelper.js', {}, { helpers: true })
  // partials
  // plop.load('../Styles/partials/setPartialStyles.js', {}, { partials: true })
  console.log(plop.getHelperList())

  plop.setGenerator('Functional Component', {
    description: 'A scaffold for a function component (React.SFC) and tests.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter a name for your component',
      },
      {
        type: 'confirm',
        name: 'usePropTypes',
        message: 'Use prop-types?',
      },
      {
        type: 'confirm',
        name: 'useIndexFile',
        message: 'Create Index File?',
      },
      {
        type: 'list',
        name: 'styleType',
        message: 'Style Type',
        choices: [
          {
            name: 'SCSS Module',
            value: USE_SCSS_MODULE,
          },
          {
            name: 'CSS',
            value: USE_PURE_CSS,
          },
          {
            name: 'No Style',
            value: false,
          },
        ],
      },
    ],
    actions: ({ name, usePropTypes, useIndexFile = true, styleType }) => {
      const actions = [
        {
          type: 'add',
          path: `${DESTINATION_PATH}/${name}.jsx`,
          templateFile: path.resolve(__dirname, './Component.hbs'),
        },
      ]

      if (useIndexFile)
        actions.push({
          type: 'add',
          path: `${DESTINATION_PATH}/index.js`,
          templateFile: path.resolve(__dirname, './index.hbs'),
        })

      if (styleType)
        actions.push({
          type: 'add',
          path: `${DESTINATION_PATH}/${name}${styleType === USE_SCSS_MODULE ? '.module' : ''}.${
            styleType === USE_SCSS_MODULE ? 'scss' : 'css'
          }`,
          templateFile: path.resolve(__dirname, './style.hbs'),
        })

      switch (styleType) {
        case 'scss-module':
          actions
          break
        case 'css':
          break

        default:
          break
      }

      return actions
    },
  })
}
