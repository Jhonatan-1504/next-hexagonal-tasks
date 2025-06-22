"use client";

import { createTaskService } from "@/libs/tasks/application/TaskService";
import { createAxiosTaskRepository } from "@/libs/tasks/Infractructure/AxiosTaskRepository";
import { useCallback, useEffect, useState } from "react";
import { useFetchAPI } from "../../hooks/useFetchAPI";
import { TaskListResponse } from "@/libs/tasks/domain/TaskResponse";
import TaskItem from "./TaskItem";
import Pagination from "../../ui/Pagination";
import LoadingIcon from "../../ui/LoadingIcon";

const TaskList = () => {
  const PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1)

  const repository = createAxiosTaskRepository();
  const service = createTaskService(repository);

  const { data, refresh, loading } = useFetchAPI<TaskListResponse>((signal) =>
    service.getAll(currentPage, signal)
  , [currentPage]);

  const goToPage = useCallback(
    (page: number) => { setCurrentPage(page) },
    [currentPage, setCurrentPage]
  );

  useEffect(()=> { refresh() }, [currentPage])

  if(loading){
    return (
      <div className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 flex gap-2 align-middle">
        <LoadingIcon />
        Cargando...
      </div>
    )
  }

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
