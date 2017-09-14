import 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

process.stdout.write(`\nBackbone - Test Suite\n`);

chai.use(chaiHttp);
