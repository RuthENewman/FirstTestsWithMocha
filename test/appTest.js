const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');

let sayHelloResult = app.sayHello();
let addNumbersResult = app.addNumbers(6,4);

describe('App', function() {
  describe('sayHello()', function() {
    it('sayHello should return hello from my first test with mocha', function() {
      assert.equal(sayHelloResult, 'hello from my first test with mocha');
    });

    it('sayHello should return type string', function() {
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNumbers()', function() {
    it('addNumbers should be above 5', function() {
      assert.isAbove(addNumbersResult, 5);
    });

    it('addNumbers should return type number', function() {
      assert.typeOf(addNumbersResult, 'number');
    });
  });
});
