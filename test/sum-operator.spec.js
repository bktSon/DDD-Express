'use strict';
const assert = require('chai').assert;
const SumOperator = require('./../src/sum-operator');

let sumOperator   = new SumOperator;

describe('Sumoperator', () => {
    describe('#operate()', () => {
        it('must return 5 when sum 1,4', () => {
            assert.equal(5, sumOperator.operate(1, 4));
        });

        it('must not return 5 when sum 1,2', () => {
            assert.notEqual(5, sumOperator.operate(1, 2));
        })
    })
});
