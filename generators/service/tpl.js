module.exports = function(name, type) {
  let tpl;
  switch (type) {
    case 'js':
      tpl = `'use strict';

const Service = require('egg').Service;

class ${name}Service extends Service {
  async find() {
    return 'hi, egg';
  }
}

module.exports = ${name}Service;
`;
      break;
    case 'ts':
      tpl = `import { Service } from 'egg';

export default class ${name}Service extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return \`hi, \${name}\`;
  }
}
`;
      break;
    default:
  }
  return tpl;
};
