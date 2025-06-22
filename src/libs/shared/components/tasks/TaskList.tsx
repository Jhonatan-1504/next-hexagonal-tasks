"use client";

import { createTaskService } from "@/libs/tasks/application/TaskService";
import { createAxiosTaskRepository } from "@/libs/tasks/Infractructure/AxiosTaskRepository";
import { useCallback } from "react";
import { useFetchAPI } from "../../hooks/useFetchAPI";
import { TaskListResponse } from "@/libs/tasks/domain/TaskResponse";
import { useParams, useRouter } from "next/navigation";
import TaskItem from "./TaskItem";
import Pagination from "../../ui/Pagination";

const TaskList = () => {
  const PER_PAGE = 5;
  const params = useParams();
  const router = useRouter();
  const currentPage = Number(params.page ?? 1);

  const repository = createAxiosTaskRepository();
  const service = createTaskService(repository);

  const { data } = useFetchAPI<TaskListResponse>((signal) =>
    service.getAll(currentPage, signal)
  );

  const goToPage = useCallback(
    (page: number) => {
      router.push(`?page=${page}`);
    },
    [router]
  );

  if (!data?.data.length)
    return (
      <div className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        No hay tasks
      </div>
    );

  return (
    <>
      <div className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 mb-8 flex flex-col gap-4">
        {data?.data.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </div>

      <Pagination
        total={data?.count ?? 0}
        currentPage={currentPage}
        perPage={PER_PAGE}
        onChange={goToPage}
      />
    </>
  );
};

export default TaskList;
