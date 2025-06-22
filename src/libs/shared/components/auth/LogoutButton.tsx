"use client";

import { createAuthService } from "@/libs/auth/application/AuthService";
import { createAxiosAuthRepository } from "@/libs/auth/infractructure/AxiosAuthRepository";
import { createLocalStorageRepository } from "@/libs/auth/infractructure/LocalStorageRepository";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const LogoutButton = () => {
  const router = useRouter();

  const storage = createLocalStorageRepository();
  const repository = createAxiosAuthRepository(storage);
  const service = createAuthService(repository);

  const onClick = useCallback(() => {
    service.logout().then(() => router.push("/"));
  }, []);

  return (
    <a
      onClick={onClick}
      className="cursor-pointer block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    >
      Salir
    </a>
  );
};

export default LogoutButton;
