import { Token } from '@/types/octoparse';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HTTPService {
  private httpServiceAxios: AxiosInstance;
  private token: String = '';
  private tokenType: String = '';

  constructor() {
    this.httpServiceAxios = axios.create({
      baseURL: 'https://openapi.octoparse.com',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async configWithAuthHeader(): Promise<AxiosRequestConfig> {
    return {
      headers: {
        Authorization: `${this.tokenType} ${this.getToken}`,
      },
    };
  }

  async getToken(): Promise<Token> {
    const data = {
      username: 'ezequiel12',
      password: 'proyecto404',
      grant_type: 'password',
    };

    const response = await this.httpServiceAxios.post('/token', data, await this.configWithAuthHeader());
    return response.data;
  }

  async getExportedData(taskId: string): Promise<any> {
    return await this.httpServiceAxios.get(`/notexported?taskId=${taskId}&size=${4}`);
  }
}
