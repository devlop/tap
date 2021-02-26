'use strict';

const tap = function<T>(value : T, callback : Function) : T {
    callback(value);

    return value;
};

export default tap;

// Allow use of default import syntax in TypeScript
module.exports = tap;
module.exports.default = tap;
