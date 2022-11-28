import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class OctoparseHTTPService {
  private httpServiceAxios: AxiosInstance;

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
        Authorization: 'Basic',
      },
    };
  }
  async getToken(): Promise<any> {
    const data = {
      username: credentials,
      password: credentials,
      grant_type: 'password',
    };
    return await this.httpServiceAxios.post('/token', data, await this.configWithAuthHeader());
  }

  async getExportedData(credentials: CredentialsType): Promise<any> {
    const data = {
      username: credentials,
      password: credentials,
      grant_type: 'password',
    };

    return await this.httpClient.post(`/notexported?taskId=${"a3b9bdf7-9aaa-22f6-9ccf-b32790f6df8f"}&size=${size}`, data);
  }
}
