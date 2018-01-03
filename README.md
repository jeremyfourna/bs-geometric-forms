# bs-geometric-forms

[![NPM](https://nodei.co/npm/bs-geometric-forms.png)](https://www.npmjs.com/package/bs-geometric-forms)

## Installation

`npm i bs-geometric-forms`

## Usage

```js
const { createRectangle } = require('bs-geometric-forms');

const svg = d3.select('#app').append('svg');

const xPosition = 0;
const yPosition = 0;
const width = 100;
const height = 200;

svg.attr('height', 400);
svg.attr('width', 400);

createRectangle(xPosition, yPosition, width, height, svg);
```

### Example

`npm run example` then go to `http://localhost:1234`

## Feature list

This package allow you to create the following forms:

* Rectangle via `createRectangle` function
* Circle via `createCircle` function
* Line via `createLine` function
* Arc via `createArc` function
