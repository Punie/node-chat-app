/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable padded-blocks */

const { expect } = require('chai');

const { generateMessage } = require('./message');

describe('generateMessage', () => {

  it('should generate correct message object', () => {
    const from = 'Hugo';
    const text = 'Some text';
    const res = generateMessage(from, text);

    expect(res).to.include({ from, text });
    expect(res.createdAt).to.be.a('number');
  });

});
