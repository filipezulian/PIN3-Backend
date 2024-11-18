import 'reflect-metadata';
import 'module-alias/register';
import 'express-async-errors';
import express from 'express';
import { router } from './routes';
import createConnection from './database/connection_database';
import './containers/modules';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import moment from 'moment-timezone';
import { AppError } from '@config/AppError';
const timezone = 'America/Sao_Paulo';
moment.tz.setDefault(timezone);

export const app = express();

const initializeApp = async () => {
  try {
    const connection = await createConnection();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(helmet());
    const limiter = rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 50,
      message: 'Too many requests from this IP, please try again later.',
    });
    app.use(limiter);

    app.use(router);  
  } catch (error) {
    console.error('Failed to initialize app:', error);
    throw new AppError('App initialization failed', 500);
  }
};

initializeApp();
