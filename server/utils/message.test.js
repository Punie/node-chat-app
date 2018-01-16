/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable padded-blocks */

const { expect } = require('chai');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Hugo';
    const text = 'Some text';
    const res = generateMessage(from, text);

    expect(res).to.include({ from, text });
    expect(res.createdAt).to.be.a('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Hugo';
    const lat = 15;
    const lng = 39;
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    const res = generateLocationMessage(from, lat, lng);

    expect(res).to.include({ from, url });
    expect(res.createdAt).to.be.a('number');
  });
});
