const DivideOperator = require('./../src/divide-operator');
const assert         = require('chai').assert;
const divideOperator = new DivideOperator;


describe('DivideOperator Class', () => {
    describe('#operate()', () => {
        it('must return 4 when passign 8, 4', () => {
            assert.equal(4, divideOperator.operate(8, 2));
        });

        it('Throw Error Divide by zero', () => {
            assert.throws(function() {
                divideOperator.operate(1, 0);
            }, 'Error Division by zero');
        })
    })
});


