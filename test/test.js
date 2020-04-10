'use strict';

const assert = require('assert');
const dc = require('../');

// mocha でのテストの書き方
describe('#effectiveDamage()', () => {

  it('正常なダメージ計算ができる', () => {
    assert.equal(dc.effectiveDamage(100, 50, 30), 83);
  });
  
});