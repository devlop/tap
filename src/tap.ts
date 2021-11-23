'use strict';

const tap = function<TypeOfValue>(value : TypeOfValue, callback : Function) : TypeOfValue {
    callback(value);

    return value;
};

// allows "import tap from '@devlop/tap'" and "import { tap } from '@devlop/tap'"
export {
    tap as default,
    tap as tap,
};
