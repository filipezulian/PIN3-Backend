import { Request, Response, NextFunction } from 'express';
import { AppError } from '@config/AppError';
import jwt from 'jsonwebtoken';

export const Authenticated = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  if (request.originalUrl.includes('/login')) {
    return next();
  }

  const token = request.cookies?.accessToken;
  if (!token) {
    throw new AppError('Invalid Token, please login', 401);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    request.user = decoded;
    next();
  } catch (err) {
    console.error('Token verification error:', err);
    throw new AppError('Invalid Token, please login', 401);
  }
};