import { CustomError } from 'ts-custom-error';

export class NotFoundError extends CustomError {
  constructor() {
    super('Not found');
  }
}
