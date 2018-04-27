'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const changeCase = require('change-case');
const tpl = require('./tpl');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', {
      type: String,
      required: false
    });
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the epic ' + chalk.red('generator-eggjs') + ' generator!')
    );

    const prompts = [
      {
        type: 'list',
        name: 'type',
        message: 'file type',
        choices: ['js', 'ts'],
        default: 'js'
      },
      {
        type: 'input',
        name: 'name',
        message: 'controller name',
        default: this.options.name || this.name
      }
    ];

    return this.prompt(prompts).then(props => {
      const path = props.name
        .split('/')
        .map(function(item) {
          return changeCase.camelCase(item);
        })
        .join('/');
      const type = changeCase.camelCase(props.type);
      this.props = Object.assign(
        {},
        {
          path: path,
          type: type
        }
      );
    });
  }

  writing() {
    const path = this.props.path;
    const type = this.props.type;
    const name = changeCase.upperCaseFirst(path.split('/')[path.split('/').length - 1]);
    // Copy and apply props
    this.fs.write(
      this.destinationPath(`app/controller/${path}.${type}`),
      tpl(name, type)
    );
  }

  end() {
    this.log('\nAll done.');
  }
};
