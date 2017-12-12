[![License][license-image]][license-url]
[![styled with prettier][prettier-image]][prettier-url]

# React Sketch Book

![](https://github.com/frosato-ekino/react-sketch-book/blob/master/img/capture.png)


## Intro

This package is an helper to make all your components available into a Sketch document easily. 
It uses [React Skecth.app][react-sketchapp-url] under the hood and take care of all the configuration for you.
You just have to write .sketch.js files for each of the components you want to have in you document and run the build command.

The API is deeply inspired by the famous [Storybook][storybook-url].



## Requirement
First, make sure you have installed [Sketch version 47][sketch-url], & a recent npm version.

:warning: Your components must be written using either [react-primitives][react-primitives-url] or [react-sketchapp][react-sketchapp-url].

## Getting Started :runner:

### Install react-sketch-book package

```
npm i react-sketch-book --save -D
```

### Add the command to your package.json

```
{
  "scripts": {
    "sketchbook": "react-sketch-book -p ../src"
  }
}
```
the `-p` or `--path` argument is the path of your project folder relative to your node_modules directory where sketchbook is setup.

### Write your sketch files

```js
import React from 'react';
import { sketchOf } from 'react-sketch-book';
import Button from './Button'; // Component built with react-primitves or react-sketchapp

sketchOf('Button')
  .add('Button1', () => (<Button>Hello Button</Button>))
  .add('ButtonWithEmoji', () => (<Button>😀 😎 👍 💯</Button>));
```
name your files with `.sketch.js` extension. `eg: Button.sketch.js`

### Build your Sketch Book

Open a new Sketch document then run the following command:

```
npm run sketchbook
```

## Thanks

Made with :hearts: for React

[sketch-url]: https://www.sketchapp.com/updates/
[storybook-url]: https://github.com/storybooks/storybook
[react-sketchapp-url]: https://github.com/airbnb/react-sketchapp
[react-primitives-url]: https://github.com/lelandrichardson/react-primitives
[prettier-image]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
[license-image]: https://img.shields.io/github/license/frosato-ekino/react-sketch-book.svg?style=flat-square
[license-url]: https://github.com/frosato-ekino/react-sketch-book/blob/master/LICENSE
