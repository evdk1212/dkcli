const inquirer = require('inquirer')
const { createProject } = require('./func/creator')


inquirer.registerPrompt('search-list', require('inquirer-search-list'))

async function init() {
  console.log(`
🙂 Initializing
___   _  __  ___  _  _  _ 
|   \ | |/ / / __|| |(_)(_)
| |) ||   < | (__ | || || |
|___/ |_|\_\ \___||_||_||_|

⚠️ You need Npm globally installed to use dk-cli.
ℹ️ To install Npm, visit 👉 https://nodejs.org/ \n
ℹ️ For flutter project ensure flutter installed, to install visit 👉 https://flutter.dev/ \n
🌐 Visit my portfolio 👉 https://iam-deepak.me \n
    `)

  await inquirer
    .prompt([
      {
        type: 'input',
        name: 'projectname',
        message: 'What is your project name?',
      },
    ])
    .then(async ({ projectname }) => {
      await inquirer
        .prompt([
          {
            type: 'search-list',
            name: 'project',
            message:
              'What project would you like to initialize? (Type to search...)',
            choices: [
              'ReactJS',
              'React Native',
              'Angular',
              'Flutter'
            ],
            default: 'Flutter',
          },
        ])
        .then(async ({ project }) => {
          createProject( project, projectname )
        })
        .catch(error => {
          console.log('❗ 404 Error not found 📚')

          // For development purposes
          // console.log(error)
          // console.log(error.message)

          process.exit(1)
        })
    })
    .catch(error => {
      console.log('❗ 404 Error not found 📚')

      // For development purposes
      // console.log(error)
      // console.log(error.message)

      process.exit(1)
    })
}

module.exports = {
  init,
}