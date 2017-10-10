'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const crypto = require('crypto');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('appname', {
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
        message: 'project type',
        choices: ['simple', 'empty', 'plugin', 'framework'],
        default: 'simple'
      },
      {
        type: 'input',
        name: 'name',
        message: 'project name',
        default: this.options.appname || this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'project description',
        default: 'None'
      },
      {
        type: 'input',
        name: 'author',
        message: 'project author',
        default: this.user.git.name()
      },
      {
        type: 'input',
        name: 'keys',
        message: 'project keys',
        default: this._getKeys()
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = Object.assign(props, {
        org: props.author
      });
    });
  }

  writing() {
    const name = this.props.name;
    const type = this.props.type;

    // Copy and apply props
    this.fs.copyTpl(
      this.templatePath(type + '/**/*'),
      this.destinationRoot(name),
      this.props
    );

    // Rename .gitignore
    this.fs.move(this.destinationPath('_.gitignore'), this.destinationPath('.gitignore'));

    // Rename package.json
    this.fs.move(
      this.destinationPath('_package.json'),
      this.destinationPath('package.json')
    );
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: true
    });
  }

  end() {
    this.log('\nAll done.');
  }

  _getKeys() {
    return crypto
      .createHash('sha1')
      .update(Date.now().toString())
      .digest('hex');
  }
};
