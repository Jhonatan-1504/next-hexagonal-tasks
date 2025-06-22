"use client";

import { createTaskService } from "@/libs/tasks/application/TaskService";
import { Task } from "@/libs/tasks/domain/Task";
import { createAxiosTaskRepository } from "@/libs/tasks/Infractructure/AxiosTaskRepository";
import { useCallback, useState } from "react";
import LoadingIcon from "../../ui/LoadingIcon";

type TaskDeleteButtonProps = {
  task: Task;
};

const TaskDeleteButton = ({ task }: TaskDeleteButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const repository = createAxiosTaskRepository();
  const service = createTaskService(repository);

  const onClick = useCallback(async () => {
    setIsLoading(true);
    try {
      await service.delete(task.id).then(() => window.location.reload() );
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading}
      className="cursor-pointer disabled:cursor-not-allowed text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
    >
      <div className="flex gap-2">
        {isLoading && <LoadingIcon />}
        {isLoading ? "Borrando..." : "Delete"}
      </div>
    </button>
  );
};

export default TaskDeleteButton;
