var Test = require('../../support/convert-runner');

describe('Converter ::', function() {
  describe('FIND LIKE statements', function() {
    it('should generate a query', function() {
      Test({
        criteria: {
          model: 'user',
          method: 'find',
          criteria: {
            where: {
              like: {
                firstName: '%foo%'
              }
            }
          }
        },
        query: {
          select: [],
          from: 'user',
          where: {
            and: [
              {
                firstName: {
                  like: '%foo%'
                }
              }
            ]
          }
        }
      });
    });
  });
});
