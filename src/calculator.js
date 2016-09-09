'use strict';

class Calculator {

    constructor() {
        this.operators = {};
    }

    addOperator(name, operator) {
        this.operators[name] = operator;
    }

    getOperator(name) {
        let operator = this.operators[name];
        if (!operator) {
            throw new Error(`Operator [${name}] is not existed`)
        }
        return this.operators[name];
    }

    calculate(name, a, b) {
        let operator = this.getOperator(name);
        return operator.operate(a, b);

    }
}

module.exports = Calculator;
