# Ice Cream Builder - React JS Starter Application

A basic template that consists of the essential elements that are required to start building a React application using [create-react-app](https://github.com/facebook/create-react-app).

## Table of contents

- [Installation](#installation)
  - [Node JS](#node-js)
  - [Create React App](#create-react-app)
- [Editor setup](#editor-setup)
  - [Plugins](#plugins)
  - [Settings](#settings)
  - [Set Line Breaks](#set-line-breaks)
- [Linting & Auto Formatting setup](#linting-and-auto-formatting-setup)

## Installation

### node js

You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine. You can check your node version by simply typing below commands:

```bash
node -v
```

If you don't have node.js installed in your machine, you can install it from [node.js official website](https://nodejs.org/en).

In case you have older version node.js installed in your machine, you can follow [this guideline](https://phoenixnap.com/kb/update-node-js-version) to update node.js.

### Create React App

Open terminal and 'cd' into the folder where you want your project to reside & enter the below command in your terminal:

```bash
npx create-react-app ice-cream-builder
```

This will create a new folder called "ice-cream-builder" and install everything required to start a new react application.

## Editor Setup

You can use any editor but as I personally prefer VS Code. I will give some instructions about how I prefer VS code to be setup for React applications.

### Plugins

I would recommend below plugins for VS Code:

- ESLint by Dirk Baeumer
- Prettier - Code formatter by Prettier
- Live Server by Ritwick Dey
- Path Autocomplete by Mithai Vilcu
- Bracket Pair Colorizer by CoenraadS
- Material Icon Theme by Phillipp Kief
- ES7 React/Redux/GraphQL/React-Native snippets - dsznajder

### Settings

I would also recommend below settings for VS Code. You can edit the VS Code settings.json file by simply pressing (CTRL + ,) in Windows or (CMD + ,) in MacOS

```json
{
  "editor.wordWrap": "on",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "eslint.alwaysShowStatus": true,
  "javascript.validate.enable": false,
  "prettier.disableLanguages": ["javascript", "javascriptreact"],
  "bracketPairColorizer.colorMode": "Independent",
  "bracketPairColorizer.independentPairColors": [
    ["()", ["White"], "Red"],
    ["[]", ["Orchid"], "Red"],
    ["{}", ["LightSkyBlue"], "Red"]
  ],
  "workbench.iconTheme": "material-icon-theme",
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "path-autocomplete.extensionOnImport": true,
  "path-autocomplete.excludedItems": {
    "**/*.js": {
      "when": "**"
    },
    "**/*.jsx": {
      "when": "**"
    }
  }
}
```

### Set Line Breaks

Make sure in your VS Code Editor, "LF" is selected as line feed instead of CRLF (Carriage return and line feed). To do that, just click LF/CRLF in bottom right corner of editor, click it and change it to "LF". If you dont do that, you will get errors in my setup.

<img src="public/line-feed.jpg" alt="Line Feed" width="700">

## Linting and auto Formatting Setup

- Open terminal and cd into the project directory
- enter below command

```bash
npx install-peerdeps --dev eslint-config-airbnb@18.1.0
```

- when the above one finishes, enter the below command

```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier
```

- create 2 new files inside the project root folder called '.eslintrc' and '.eslintignore'
- write below lines inside .eslintignore file

```txt
src/serviceWorker.js
src/setupTests.js
public/*
```

- write below lines inside .eslintrc file

```txt
{
    "extends": [
        "react-app",
        "airbnb",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "prettier/react"
    ],
    "plugins": [
        "jsx-a11y",
        "prettier"
    ],
    "rules": {
        "no-console": "off",
        "react/state-in-constructor": "off",
        "react/prop-types": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 100,
                "tabWidth": 4,
                "semi": true
            }
        ]
    }
}
```
