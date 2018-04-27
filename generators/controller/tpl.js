module.exports = function(name, type) {
  let tpl;
  switch (type) {
    case 'js':
      tpl = `'use strict';

const Controller = require('egg').Controller;

class ${name}Controller extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
}

module.exports = ${name}Controller;
`;
      break;
    case 'ts':
      tpl = `import { Controller } from 'egg';

export default class ${name}Controller extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
`;
      break;
    default:
  }
  return tpl;
};
