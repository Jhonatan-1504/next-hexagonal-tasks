import axiosClient from "@/libs/shared/axiosClient";
import { TaskRepository } from "../domain/TaskRepository";
import { TaskListResponse, TaskOneResponse } from "../domain/TaskResponse";

export const createAxiosTaskRepository = (): TaskRepository => ({
  async getAll(page, signal) {
    const { data } = await axiosClient.get<TaskListResponse>(`/tasks?page=${page}`, { signal });

    return data;
  },
  async getOneById(id, signal) {
    const { data } = await axiosClient.get<TaskOneResponse>(`/tasks/${id}`, { signal });

    return data
  },
  async save(task) {
    await axiosClient.post("/tasks", task)
  },
  async update(task) {
    await axiosClient.put(`/tasks/${task.id}`, task)
  },
  async delete(id) {
    await axiosClient.delete(`/tasks/${id}`)
  },
});
