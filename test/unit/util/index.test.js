var assert = require('chai').assert;
var container = require('../container');

describe('util', function () {

  var util;

  beforeEach(function () {
    util = container.get('util');
  });

  describe('parse', function () {
    it('should parse a response', function () {
      var res = [
        {},
        JSON.stringify({ code: '0', response: 'response' })
      ];
      assert.equal(util.parse(res), 'response', 'correct response should have been parsed.');
    });
    it('should handle an error code', function () {
      var res = [
        {},
        JSON.stringify({ code: '1', response: 'some error' })
      ];
      assert.throws(function () {
        util.parse(res);
      }, Error, 'some error', 'correct error response should have been returned.');

      res = [
        {},
        JSON.stringify({ code: 1, response: 'some error' })
      ];
      assert.throws(function () {
        util.parse(res);
      }, Error, 'some error', 'correct error response should have been returned.');
    });
    it('should handle a missing code', function () {
      var res = [
        {},
        { response: 'some error' }
      ];
      assert.throws(function () {
        util.parse(res);
      }, Error, 'Failed to parse response from Disqus.', 'correct error response should have been returned.');
    });
  });

  describe('serialize', function () {
    it('should properly serialize a query', function () {
      var qs = {
        stuff: '1'
      };
      assert.deepEqual(util.serialize(qs), qs, 'should return the correct serialization.');
    });
  });

  describe('request', function () {
    it('should be a promisified version of "request"', function () {
      // TODO: util.request test
    });
  });

  describe('executeAPIMethod', function () {
    it('should execute an api method', function () {
      // TODO: util.executeAPIMethod test
    });
  });

  describe('printCliResult', function () {
    it('should print a cli result', function () {
      // TODO: util.printCliResult test
    });
  });
});
