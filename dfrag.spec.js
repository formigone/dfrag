const dfrag = require('./dfrag');
const expect = require('chai').expect;

global.document = {
  createElement: (type) => ({
    nodeName: type.toUpperCase(),
  }),
};

describe('dfrag', () => {
  it('creates object of _type_', () => {
    const type = 'p';
    const el = dfrag(type);
    expect(el.nodeName).to.equal(type.toUpperCase());
  });
});
