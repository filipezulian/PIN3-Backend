import dotenv from 'dotenv';
dotenv.config();

export default {
    secret_token: process.env.JWT_SECRET,
    expires_in_token: '1d',
    secret_refresh_token: process.env.REFRESH_SECRET,
    expires_in_refresh_token: '1d',
    expires_refresh_token_days: 1,
  };
  