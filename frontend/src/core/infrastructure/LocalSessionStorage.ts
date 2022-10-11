import { SessionStorage } from '../domain/SessionStorage';

const SESSION_KEY = 'conversation_id';

export class LocalSessionStorage implements SessionStorage {
  get(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  store(key: string, data: string): void {
    sessionStorage.setItem(key, data);
  }

  clear(): void {
    sessionStorage.clear();
  }

  remove(key: string): void {
    sessionStorage.removeItem(key);
  }

  hasSession(): boolean {
    return sessionStorage.getItem(SESSION_KEY) !== null;
  }
}
