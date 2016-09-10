'use strict';

class Calculator {
    constructor() {
        this.operators = {};
    }
    setOperator(name, operator) {
        return this.operators[name] = operator;
    }

    getOperator(name) {
        if(! this.operators[name]) {
            throw new Error(`Operator [${name}] not existed]`);
        }
        return this.operators[name];
    }

    calculate(name, a, b) {
        let operator = this.operators[name];
        return operator.operate(a, b);
    }
}

module.exports = Calculator;
