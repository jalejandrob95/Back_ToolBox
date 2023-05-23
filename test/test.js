import chai, { expect, should } from 'chai';
import chaiHttp from 'chai-http';
import { Router } from 'express';
import { listFiles } from '../controllers/fileManager.controller.js';

chai.use(chaiHttp);

const router = Router();
router.get('/data', listFiles);

describe('File Manager API', () => {
  it('should respond with a 200 status code and expected body structure', (done) => {
    const res = {
      status: (statusCode) => {
        expect(statusCode).to.equal(200);
        return res;
      },
      json: (data) => {
        expect(data).to.be.an('array');
      },
    };

    const promise = new Promise((resolve, reject) => {
      listFiles(null, res);
      resolve();
    });

    promise
      .then(() => {
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
