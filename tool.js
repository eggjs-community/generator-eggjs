'use strict';
const fs = require('fs');
const fsPlus = require('fs-plus');
const Path = require('path');

const list = fsPlus.listTreeSync(Path.join(__dirname, 'generators/app/templates'));
// eslint-disable-next-line no-unused-vars
function generatorFile(fileName) {
  try {
    const file = fs.readFileSync(fileName);
    let over = file.toString().replace(/{{/g, '<%- ');
    over = over.replace(/}}/g, ' %>');
    return fs.writeFileSync(fileName, over);
  } catch (err) {}
}
list.forEach(function(item) {
  generatorFile(item);
});
console.log('tool run over.');
