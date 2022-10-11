export interface SessionStorage {
  hasSession(): boolean;
  store(key: string, data: string): void;
  clear(): void;
  get(key: string): string | null;
}