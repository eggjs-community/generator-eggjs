'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-eggjs:simple', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      type: 'simple',
      name: 'simple',
      description: 'simple project'
    });
  });

  it('creates files', () => {
    assert.file([
      'app/router.js',
      'app/controller/home.js',
      'config/plugin.js',
      '.gitignore'
    ]);
  });
});

describe('generator-eggjs:empty', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      type: 'empty',
      name: 'empty',
      description: 'empty project'
    });
  });

  it('creates files', () => {
    assert.file(['README.md', '.gitignore']);
  });
});

describe('generator-eggjs:plugin', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      type: 'plugin',
      name: 'plugin',
      description: 'egg plugin'
    });
  });

  it('creates files', () => {
    assert.file(['README.md', '.gitignore']);
  });
});

describe('generator-eggjs:framework', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      type: 'framework',
      name: 'framework',
      description: 'egg framework'
    });
  });

  it('creates files', () => {
    assert.file(['README.md', 'app/extend/context.js', '.gitignore']);
  });
});
