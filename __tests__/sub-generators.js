'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-eggjs:controller', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/controller')).withPrompts({
      type: 'js',
      name: 'test/test'
    });
  });

  it('creates files', () => {
    assert.file(['app/controller/test/test.js']);
  });
});

describe('generator-eggjs:controller', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/controller')).withPrompts({
      type: 'ts',
      name: 'test'
    });
  });

  it('creates files', () => {
    assert.file(['app/controller/test.ts']);
  });
});

describe('generator-eggjs:service', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/service')).withPrompts({
      type: 'js',
      name: 'test/test'
    });
  });

  it('creates files', () => {
    assert.file(['app/service/test/test.js']);
  });
});

describe('generator-eggjs:service', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/service')).withPrompts({
      type: 'ts',
      name: 'test'
    });
  });

  it('creates files', () => {
    assert.file(['app/service/test.ts']);
  });
});
