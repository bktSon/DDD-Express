'use strict';

let assert = require('chai').assert;

const Calculator = require('./../src/calculator');
const signon = require('sinon');

let calculator = new Calculator();

describe('Calculator', () => {

    describe('#addOperator() & #getOperator()', () => {
        it('Can set operator with give name, and can get correct operator', () => {
            let operator1 = {};
            let operator2 = {};


            calculator.addOperator('myOperator1', operator1);
            calculator.addOperator('myOperator2', operator2);

            assert.strictEqual(operator1, calculator.getOperator('myOperator1'));
            assert.strictEqual(operator2, calculator.getOperator('myOperator2'));
            assert.notStrictEqual(operator2, calculator.getOperator('myOperator1'));
        });
    });

    describe('#getOperator()', () => {
        it('Throw Error when no operator with give name existed', () => {
            assert.throws(function () {
                calculator.getOperator('SomeInvalidOperator');
            }, 'Operator [SomeInvalidOperator] is not existed');
        })
    });

    describe('#calculate()', () => {


        let fakeOperateMethod = signon.stub().returns('some result');
        let stubOperator = {
            operate: fakeOperateMethod
        };

        calculator.addOperator('myOperator', stubOperator);


        it('can run operator correctly', () => {

            let result = calculator.calculate('myOperator', 1, 4);

            assert.equal('some result', result);
            assert.ok(fakeOperateMethod.calledOnce);
            assert.ok(fakeOperateMethod.calledWith(1, 4));
        })
    })
});


