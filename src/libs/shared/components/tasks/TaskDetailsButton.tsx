"use client";

import { Task } from "@/libs/tasks/domain/Task";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

type TaskDetailsButtonProps = {
  task: Task;
};

const TaskDetailsButton = ({ task }: TaskDetailsButtonProps) => {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.push(`/tasks/details/${task.id}`);
  }, [router]);

  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
    >
      Detalles
    </button>
  );
};

export default TaskDetailsButton;
