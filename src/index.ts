import 'babel-polyfill';

import * as path from 'path';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as express from 'express';
import * as favicon from 'serve-favicon';
import * as bodyParser from 'body-parser';

import routes from './routes';
import config from './config/config';
import logger, { logStream } from './utils/logger';
import * as errorHandler from './middlewares/errorHandler';

const app = express();

app.locals.title = config.app.name;
app.locals.version = config.app.version;

app.use(favicon(path.join(__dirname, '/../public', 'favicon.ico')));
app.use(cors());
app.use(helmet());
app.use(morgan('dev', { stream: logStream }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../public')));

// API Routes
app.use('/api', routes);

// Error Middlewares
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.notFoundError);

logger.info('Application Environment: ' + app.get('env'));
logger.debug('Debug logs are enabled');

app.listen(config.app.port, () =>
  logger.info(`Listening on port ${config.app.port}`)
);
