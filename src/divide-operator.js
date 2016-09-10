'use strict';

class DivideOperator {
    operate(a, b) {
        if (b == 0) {
            throw new Error('Error Division by zero');
        }
        return a / b;
    }
}












module.exports = DivideOperator;
