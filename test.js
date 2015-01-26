
var dot = require('./index');
var assert = require('assert');

var temp = {

  one: 'first',
  two: { one: 'second first'},
  three: [
    'one',
    { one: 'third first' }
  ]

}

describe('dotArr', function () {

  it('should return second first', function () {

    var should = 'second first';
    var result = dot(temp, 'two.one');

    assert.equal(should, result);

  });

  it('should return third first', function () {

    var should = 'third first';
    var result = dot(temp, 'three.[1].one');

    assert.equal(should, result);

  });

});
