/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable padded-blocks */

const { expect } = require('chai');

const { isRealString } = require('./validation');

describe('isRealString', () => {

  it('should reject non-string values', () => {
    expect(isRealString(5)).to.equal(false);
  });

  it('should reject string with only spaces', () => {
    expect(isRealString('   ')).to.equal(false);
  });

  it('should allow string with non-space characters', () => {
    expect(isRealString('  Hello world!   ')).to.equal(true);
  });

});
