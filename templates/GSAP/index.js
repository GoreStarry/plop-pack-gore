module.exports = function(plop) {
  // controller generator
  plop.setGenerator('GSAP', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'animation name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `src/animate{{properCase name}}.js`,
        templateFile: './animate.hbs',
      },
    ],
  })
}
