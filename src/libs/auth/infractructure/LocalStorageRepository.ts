import type { AuthStorageRepository } from "../domain/AuthStorageRepository";

export const createLocalStorageRepository = (): AuthStorageRepository => ({
  clear() {
    localStorage.clear();
  },
  getToken() {
    const token = localStorage.getItem("token");

    return token;
  },
  save(token) {
    localStorage.setItem("token", token);
  },
});
