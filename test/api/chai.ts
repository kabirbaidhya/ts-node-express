import 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

export const expect = chai.expect;
export const request = chai.request;
export default chai;
