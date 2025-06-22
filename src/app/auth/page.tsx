"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createLocalStorageRepository } from "@/libs/auth/infractructure/LocalStorageRepository";
import LoadingIcon from "@/libs/shared/ui/LoadingIcon";

export default function AuthPage() {
  const router = useRouter();

  useEffect(() => {
    const storage = createLocalStorageRepository();
    const token = storage.getToken();

    if (!token) {
      router.replace("/");
    } else {
      router.replace("/tasks");
    }
  }, []);

  return (
    <>
      <LoadingIcon />
      Cargando...
    </>
  );
}
