module.exports = function (container, assert) {
  return function () {
    var util;

    beforeEach(function () {
      util = container.get('util');
    });

    describe('parse', function () {
      it('should parse a response', function () {
        var response = { code: '0', response: 'response' };
        var res = [
          {},
          JSON.stringify(response)
        ];
        assert.deepEqual(util.parse(res), response, 'correct response should have been parsed.');
      });
      it('should handle an error code', function () {
        var response = { code: '1', response: 'some error' };
        var res = [
          {},
          JSON.stringify(response)
        ];
        assert.throws(function () {
          util.parse(res);
        }, Error, 'some error', 'correct error response should have been returned.');

        response = { code: 1, response: 'some error' };
        res = [
          {},
          JSON.stringify({ code: 1, response: 'some error' })
        ];
        assert.throws(function () {
          util.parse(res);
        }, Error, 'some error', 'correct error response should have been returned.');
      });
      it('should handle a missing code', function () {
        var response = { response: 'some error' };
        var res = [
          {},
          response
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
        assert.deepEqual(util.serialize(qs), 'stuff=1', 'should return the correct serialization.');
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
  };
};
