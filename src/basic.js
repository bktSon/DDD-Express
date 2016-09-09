'use strict';

class  Calculator {
    sum(a, b) {
        return a + b;
    }

    minus(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if(b == 0) {
            throw new Error('Division By Zero');
        }
        return a / b;

    }
}

module.exports = Calculator;