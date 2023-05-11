const stringLength = (string) => {
    const length = string.length;

    if (length < 1 || length > 10) {
        throw new Error ('string length should be between 1 and 10')
    }

    return length;
}


module.exports = stringLength;