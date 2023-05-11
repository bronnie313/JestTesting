const stringLength = require('./main');

test('returns the length of a string', () => { 
    expect(stringLength('Ronnie')).toBe(6)
})