import { HttpClient } from './http/HttpClient';
import { ScrapingHttpService } from './http/ScrapingHttpService';
import { LocalSessionStorage } from './LocalSessionStorage';

export const sessionStorage = new LocalSessionStorage();
export const httpClient = new HttpClient(sessionStorage);
export const scrapingService = new ScrapingHttpService(httpClient);
