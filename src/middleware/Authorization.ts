import { Request, Response, NextFunction } from 'express';
import { AppError } from '@config/AppError';
import jwt from 'jsonwebtoken';
import { getToken } from 'utils/tokenStore';

export const Authenticated = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  if (request.originalUrl.includes('/login')) {
    return next();
  }
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    console.error('Missing Authorization header');
    throw new AppError('Invalid Token, please login', 401);
  }

  const [, token] = authHeader.split(' ');
  if (!token) {
    console.error('Invalid Authorization header format');
    throw new AppError('Invalid Token, please login', 401);
  }

  console.log('Extracted token:', token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;

    console.log('Decoded token:', decoded);

    const storedTokens = getToken(decoded.sub);
    console.log('Stored tokens for user:', storedTokens);

    if (!storedTokens || storedTokens.accessToken !== token) {
      throw new AppError('Invalid Token, please login', 401);
    }

    request.user = decoded;
    next();
  } catch (err) {
    console.error('Token verification error:', err);
    throw new AppError('Invalid Token, please login', 401);
  }
};