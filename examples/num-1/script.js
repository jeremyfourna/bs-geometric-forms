const { rectangle } = require('../../index.js');

const svg = d3.select('#app')
  .append('svg');

const xPosition = 0;
const yPosition = 0;
const width = 100;
const height = 200;

svg.attr('height', 400);
svg.attr('width', 400);

rectangle(xPosition, yPosition, width, height, svg);
//createRectangle(width + xPosition, height + yPosition, width * 2, height, svg);
