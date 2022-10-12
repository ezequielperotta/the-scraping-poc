import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpJsonError } from './HttpJsonError';
import { NotAuthenticatedError } from './NotAuthenticatedError';
import { NetworkError } from './NetworkError';
import { SessionStorage } from '../../domain/SessionStorage';
import { NotFoundError } from './NetworkFound';

export class HttpClient {
  private http: AxiosInstance;
  private httpForm: AxiosInstance;
  private readonly sessionStorage: SessionStorage;
  private baseUrl: string = 'http://localhost:3001/';

  constructor(session: SessionStorage) {
    this.sessionStorage = session;
    this.http = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.httpForm = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async get(url: string): Promise<any> {
    try {
      return await this.http.get(url, await this.configWithAuthHeader());
    } catch (e) {
      this.handleError(e);
    }
  }

  async post(url: string, jsonBody: Record<string, unknown>): Promise<any> {
    try {
      return await this.http.post(url, JSON.stringify(jsonBody), await this.configWithAuthHeader());
    } catch (e) {
      this.handleError(e);
    }
  }

  async postFormData(url: string, data: FormData): Promise<any> {
    try {
      return await this.httpForm.post(url, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (e) {
      this.handleError(e);
    }
  }

  async put(url: string, jsonBody: Record<string, unknown> = {}): Promise<any> {
    try {
      return await this.http.put(url, JSON.stringify(jsonBody), await this.configWithAuthHeader());
    } catch (e) {
      this.handleError(e);
    }
  }

  async patchFormData(url: string, data: FormData): Promise<any> {
    try {
      return await this.httpForm.patch(url, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (e) {
      this.handleError(e);
    }
  }

  async delete(url: string): Promise<any> {
    try {
      return await this.http.delete(url, await this.configWithAuthHeader());
    } catch (e) {
      this.handleError(e);
    }
  }

  async configWithAuthHeader(): Promise<AxiosRequestConfig> {
    if (!await this.sessionStorage.hasSession()) { return {}; }
    return {
      headers: {
        'Authorization': 'Basic ' + await this.sessionStorage.get('TOKEN'),
      },
    };
  }

  handleError(e: any): void {
    if (e.response.status === 500) { throw new NetworkError(); }
    if (e.response.status === 401) { throw new NotAuthenticatedError(); }
    if (e.response.status === 404) { throw new NotFoundError(); }
    throw new HttpJsonError(e.response.status, e.response.data);
  }

}
