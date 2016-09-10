'use strict';

let assert = require('chai').assert;

const Calculator = require('./../src/calculator');
const signon = require('sinon');

let calculator = new Calculator();

describe('Calculator', () => {
    describe('#setOperator() & #getOperator()', () => {
        it('Can set Operator with give name and get correct operator', () => {
            let operator1 = {};
            let operator2 = {};

            calculator.setOperator('myOperator1', operator1);
            calculator.setOperator('myOperator2', operator2);

            assert.equal(operator1, calculator.getOperator('myOperator1'));
            assert.strictEqual(operator2, calculator.getOperator(('myOperator2')));
            assert.notStrictEqual(operator2, calculator.getOperator(('myOperator1')));
        });

        it('Throw error if not existed operator', () => {
            assert.throws(function() {
                calculator.getOperator('InvalidOperator');
            }, 'Operator [InvalidOperator] not existed');
        });


    });

    describe('#calculate()', () => {

            let fakeOperateMethod = signon.stub().returns('some result');
            let fakeOperatorStub = {
                operate: fakeOperateMethod
            };
            calculator.setOperator('myoperator', fakeOperatorStub);

            it('Can run operator correctly', () => {
                assert.equal('some result', calculator.calculate('myoperator', 1, 2));
                assert.ok(fakeOperateMethod.calledOnce);
                assert.ok(fakeOperateMethod.calledWith(1, 2));
            });
        })

});

