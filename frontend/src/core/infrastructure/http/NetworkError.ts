import { CustomError } from 'ts-custom-error';

export class NetworkError extends CustomError {
  constructor() {
    super('Network error');
  }
}
