# Abbeal - React Training Test for Beauclair Bilong

## TL;DR

**Description :**

En conservant le layout côté front, faire une application qui permet de :
- récupérer les informations d'un livre et les afficher
- récupérer les informations de l'ensemble des personnages d'un livre et les afficher

L'API à utiliser est la suivante : https://anapioficeandfire.com/api

## Technologies

- 🔥  `react` -  server side and client side view components.
- 🤖  `redux` -  application state and actions provider.
- 🚀  `babel` - transpiles ES6+ where needed.
- 🔧  `eslint` (airbnb), `stylelint` and `flow` - code quality tools.
- 👟  `jest` with snapshots and `istanbul` coverage - testing.
- 😺  `yarn` - dependencies manager.

## Installation and Development

- Clone the repository,
- Install NodeJS LTS (with nvm),
- Install `yarn` (eg . `brew install yarn`),
- Open your local terminal to `react-training-front` repository
- Execute `yarn install`
- Execute `yarn start`.

## Project tasks (✨ Yarn)

- `yarn build` - Build the sources.
- `yarn start` - Starts the built server.
- `yarn test` - Executes all the test suite (flow checking, unit tests and linters).
- `yarn lint` - Check the code quality with ESLint.
- `yarn flow` - Static type checking.
- `yarn jest` - Launch the unit tests and generates a coverage report.

## Project Structure

```
/
|- public
|
|- src  // All the source code
|  |- shared // The shared code
|       |- components // Most of the project components
|          |- App // App components
|          |- Books // Books component
|          |- Characters // Characters component
|       |- constants // constant files
|       |- redux // redux
|          |- actions // redux actions
|          |- reducers // redux reducers
|          |- store // redux store
|       |- types
|- tools
|  |- config
|     |- test // configuration for jest
```

## Project Dependencies

The dependencies within `package.json` are structured so that the libraries required to transpile/bundle the source are contained within the `devDependencies` section, whilst the libraries required during the server runtime are contained within the `dependencies` section.
