import 'express';

declare module 'express' {
  export interface Request {
    user: {
    usr_id: number,
    usr_name: string,
    usr_email: string
    };
  }
}