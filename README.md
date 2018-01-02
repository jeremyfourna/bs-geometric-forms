# bs-geometric-forms

[![NPM](https://nodei.co/npm/bs-geometric-forms.png)](https://www.npmjs.com/package/bs-geometric-forms)

## Installation

`npm i bs-geometric-forms`

## Usage

```js
const { createRectangle } = require('bs-geometric-forms');

const d3Context = something; // DOM element

const xPosition = 0;
const yPosition = 0;
const width = 100;
const height = 200;

const firstRectangle = createRectangle(xPosition, yPosition, width, height, d3Context);
```

### List of forms

* rectangle
* circle
* line
* arc
