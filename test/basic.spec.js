'use strict';
let assert = require('chai').assert;

const  Calculator = require('./../src/basic');
let    calculator = new Calculator();

describe('Calculator', () => {
    describe('#sum()', () => {
        it('must return 10 when sum 3, 7', () => {
            assert.equal(10, calculator.sum(3, 7));
        });

        it('must return 11 when sum 3, 7', () => {
            assert.equal(11, calculator.sum(3, 8));
        })
    });

    describe('#minus()', () => {
        it('must be 10 when minus 20, 10', () => {
            assert.equal(10, calculator.minus(20, 10));
        });

        it('must be 15 when minus 20, 5', () => {
            assert.equal(15, calculator.minus(20, 5));
        })
    });

    describe('#mutiply()', () => {
        it('must be 10 when multiply 5, 2', () => {
            assert.equal(10, calculator.multiply(5, 2));
        });

        it('must be 15 when multiply 3, 5', () => {
            assert.equal(15, calculator.multiply(3, 5));
        })
    });

    describe('#divide()', () => {
        it('throw Division By zero is not defined', () => {
            assert.throws(function DivisionByZero() {
                calculator.divide(1, 0);
            })
        }, 'Division By Zero');

        it('must equal 10 when divide 20, 2', () => {
            assert.equal(10, calculator.divide(20, 2));
        });

        it('must equal -90 when divide -180, 2', () => {
            assert.equal(-90, calculator.divide(-180, 2));
        })
    })


});

















