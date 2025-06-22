import { type Auth, ensurePassword, ensureUsername } from "../domain/Auth"
import { type AuthRepository } from "../domain/AuthRepository"

export const createAuthService = (repository: AuthRepository ) => ({
  async login(auth: Auth) {
    ensureUsername(auth.username)
    ensurePassword(auth.password)

    await repository.login(auth)
  },
  async logout(){
    repository.logout()
  }
})