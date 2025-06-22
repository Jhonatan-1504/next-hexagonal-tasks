import type { Auth } from "./Auth";

export interface AuthRepository {
  login(auth: Auth): Promise<ResponseToken>;
  logout(): Promise<void>;
}
