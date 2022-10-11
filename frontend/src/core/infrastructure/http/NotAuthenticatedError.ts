import { CustomError } from 'ts-custom-error';

export class NotAuthenticatedError extends CustomError {
  constructor() {
    super('Not Authenticated: invalid token');
  }
}