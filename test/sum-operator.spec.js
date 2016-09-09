'use strict';

const assert = require('chai').assert;

const SumOperator = require('./../src/sum-operator');

describe('SumOperator', () => {
    let operator = new SumOperator();

    describe('#operate()', () => {
        it('Return 5 with passing 1, 4', () => {
            assert.equal(5, operator.operate(1, 4));
        });

        it('Return 6 with passing 2, 4', () => {
            assert.equal(6, operator.operate(2, 4));
        });
    });
});
