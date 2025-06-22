"use client";

import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";

import { Task } from "@/libs/tasks/domain/Task";
import { createAxiosTaskRepository } from "@/libs/tasks/Infractructure/AxiosTaskRepository";
import { createTaskService } from "@/libs/tasks/application/TaskService";
import { useFetchAPI } from "../../hooks/useFetchAPI";
import { TaskOneResponse } from "@/libs/tasks/domain/TaskResponse";

type TaskFormType = "create" | "edit" | "details";

type TaskFormProps = {
  type: TaskFormType;
};

const TaskForm = ({ type }: TaskFormProps) => {
  const router = useRouter();
  const params = useParams();
  const currentId = (params.id as string) ?? "";
  const isDetails = type === "details";
  const isEdit = type === "edit";

  const repository = createAxiosTaskRepository();
  const service = createTaskService(repository);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Task>({ disabled: isDetails });

  const { data, loading, refresh } = useFetchAPI<TaskOneResponse>(
    (signal) => {
      return service.getOneById(currentId, signal);
    },
    [currentId],
    { autoDispatch: false }
  );

  useEffect(() => {
    if (isEdit || isDetails) {
      refresh();
    }
  }, [isEdit, isDetails, refresh]);

  useEffect(() => {
  if ((isEdit || isDetails) && data?.data) {
    reset(data.data);
  }
}, [data, isEdit, isDetails, reset]);

  const handleSave = useCallback(
    async (task: Task) => {
      if (isEdit) {
        await service.update({ ...task, id: currentId });
      } else {
        await service.save(task);
      }

      router.back();
    },
    [currentId, router, type]
  );

  if (loading) return <p className="text-gray-400">Cargando...</p>;

  return (
    <form
      className="space-y-4 md:space-y-6"
      onSubmit={handleSubmit(handleSave)}
    >
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Titulo
        </label>
        <input
          type="text"
          {...register("title", { required: "Titulo requerido" })}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Something title"
        />
        <p className="text-red-400">{errors.title?.message}</p>
      </div>

      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Descripción
        </label>
        <input
          type="description"
          {...register("description", { required: "Descripcion requerida" })}
          placeholder="Something description"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <p className="text-red-400">{errors.description?.message}</p>
      </div>

      {!isDetails && <Button isLoading={isSubmitting}>Save</Button>}
    </form>
  );
};

export default TaskForm;
