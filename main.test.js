const stringLength = require('./main');

test('should throw an error if string length is less than 1', () => {
     expect(() =>stringLength('')).toThrow('string length should be between 1 and 10')
})