'use strict';

const assert = require('assert');
const dc = require('../');

// mocha でのテストの書き方
describe('#effectiveDamage()', () => {

  it('正常なダメージ計算ができる', () => {
    assert.equal(dc.effectiveDamage(100, 50, 30), 83);
  });

  it('負の異常値におけるダメージ計算ができる', () => {
    assert.equal(dc.effectiveDamage(-1, 0, 0), 0);
    assert.equal(dc.effectiveDamage(0, -1, 0), 0);
    assert.equal(dc.effectiveDamage(0, 0, -1), 0);
  });

});