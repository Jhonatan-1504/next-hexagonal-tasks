"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

const TaskBackButton = () => {
  const router = useRouter();

  const goToPage = useCallback(() => {
    router.push("/tasks");
  }, [router]);

  return (
    <button
      onClick={goToPage}
      type="button"
      className="cursor-pointer py-2.5 px-5 me-2 mb-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      Back to page
    </button>
  );
};

export default TaskBackButton;
