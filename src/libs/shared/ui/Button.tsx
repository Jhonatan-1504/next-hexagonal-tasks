"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import LoadingIcon from "./LoadingIcon";

type ButtonProps = {
  isLoading?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  isLoading = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      disabled={isLoading || rest.disabled}
      className={clsx(
        "w-full disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer bg-indigo-900 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
        className
      )}
      {...rest}
    >
      {isLoading && <LoadingIcon />}
      {isLoading ? "Procesando..." : children}
    </button>
  );
};

export default Button;
