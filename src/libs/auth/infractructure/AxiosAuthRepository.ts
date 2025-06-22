import axiosClient from "@/libs/shared/axiosClient"
import type { AuthRepository } from "../domain/AuthRepository"
import type { AuthStorageRepository } from "../domain/AuthStorageRepository"

export const createAxiosAuthRepository = (storage: AuthStorageRepository): AuthRepository => ({
  async login(auth) {
    const { data } = await axiosClient.post<ResponseToken>("/token", auth)

    storage.save(data.access)

    return data
  },
  async logout() {
    storage.clear()
  },
})