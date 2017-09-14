import 'mocha';
import app from '../../../src/index';
import { expect, request } from '../chai';

describe('/', () => {
  describe('GET', () => {
    it('should return API information', done => {
      request(app)
        .get('/')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.status(200);
          done();
        });
    });
  });
});
