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

  it('2000より大きい異常値におけるダメージ計算ができる', () => {
    assert.equal(dc.effectiveDamage(2001, 0, 0), 2000);
    assert.equal(dc.effectiveDamage(300, 2150, 0), 14);
    assert.equal(dc.effectiveDamage(300, 2000, 2001), 300);
  });

  // 攻撃力が500で防御力が100、防御力貫通が800の時は、実行防御力が0としてみなされ、ダメージが500となるというテスト
  it('実行防御力は０未満にならない', () => {
    assert.equal(dc.effectiveDamage(500, 100, 800), 500);
  });

});