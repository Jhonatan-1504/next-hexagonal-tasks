export interface AuthStorageRepository {
  save(token: string): void;
  clear(): void;
  getToken(): string | null;
}
