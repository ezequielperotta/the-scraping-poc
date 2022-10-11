import { CustomError } from 'ts-custom-error';

export class HttpJsonError extends CustomError {
  private readonly _status: number;
  private readonly _body: any;

  constructor(status: number, body: unknown) {
    super(`HTTP error ${body}`);
    this._status = status;
    this._body = body;
  }

  get status(): number {
    return this._status;
  }

  get body(): any {
    return this._body;
  }
}
