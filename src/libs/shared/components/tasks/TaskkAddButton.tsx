"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const TaskkAddButton = () => {
  const router = useRouter();

  const goToPage = useCallback(() => {
    router.push("/tasks/create");
  }, [router]);

  return (
    <button
      type="button"
      onClick={goToPage}
      className="text-white cursor-pointer bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4"
    >
      Add task
    </button>
  );
};

export default TaskkAddButton;
