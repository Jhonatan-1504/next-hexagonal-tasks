"use client";

import { createAuthService } from "@/libs/auth/application/AuthService";
import { type Auth } from "@/libs/auth/domain/Auth";
import { createAxiosAuthRepository } from "@/libs/auth/infractructure/AxiosAuthRepository";
import { createLocalStorageRepository } from "@/libs/auth/infractructure/LocalStorageRepository";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm  } from "react-hook-form";

const FormLogin = () => {
  const router = useRouter();

  const storage = createLocalStorageRepository();
  const repository = createAxiosAuthRepository(storage);
  const service = createAuthService(repository);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Auth>();

  const onSubmit = useCallback((auth: Auth) => {
    service.login(auth).then(() => router.push("/tasks"));
  }, []);

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your username
        </label>
        <input
          type="text"
          {...register("username", { required: "Usuario requerido" })}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Username"
        />
        <p className="text-red-400">{errors.username?.message}</p>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          {...register("password", { required: "Contraseña requerida" })}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <p className="text-red-400">{errors.password?.message}</p>
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer bg-indigo-900 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Sign in
      </button>
    </form>
  );
};

export default FormLogin;
