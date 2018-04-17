'use strict';
const fs = require('fs');
const Path = require('path');

// eslint-disable-next-line no-extend-native
Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
};

// eslint-disable-next-line no-unused-vars
function generatorFile(fileName) {
  const file = fs.readFileSync(fileName);
  let over = file.toString().replace(/{{/g, '<%- ');
  over = over.replace(/}}/g, ' %>');
  return fs.writeFileSync(fileName, over);
}

function getNameWithPath(path) {
  const files = fs.readdirSync(path).remove('.DS_Store');
  return files.map(function(item) {
    try {
      const subFiles = getNameWithPath(Path.join(path, item));
      return subFiles;
    } catch (err) {
      return Path.join(path, item);
    }
  });
}

function forEachTemplate() {
  const templatePath = Path.join(__dirname, 'generators/app/templates');
  const files = getNameWithPath(templatePath);
  return files;
}
forEachTemplate()
  .join(',')
  .split(',')
  .forEach(function(item) {
    generatorFile(item);
  });
