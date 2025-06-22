"use client";

import { Task } from "@/libs/tasks/domain/Task";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

type TaskEditButtonProps = {
  task: Task;
};

const TaskEditButton = ({ task }: TaskEditButtonProps) => {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.push(`/tasks/edit/${task.id}`);
  }, [router]);

  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
    >
      Edit
    </button>
  );
};

export default TaskEditButton;
