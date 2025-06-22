"use client";

import { type Task } from "@/libs/tasks/domain/Task";
import TaskDeleteButton from "./TaskDeleteButton";
import TaskEditButton from "./TaskEditButton";
import TaskDetailsButton from "./TaskDetailsButton";

const TaskItem = (task: Task) => {
  return (
    <div className="flex flex-col pb-3">
      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
        {task.title}
      </dt>
      <dd className="text-lg font-semibold">{task.description}</dd>

      <div className="flex justify-end mt-3">
        <TaskDetailsButton task={task} />
        <TaskEditButton task={task} />
        <TaskDeleteButton task={task} />
      </div>
    </div>
  );
};

export default TaskItem;
