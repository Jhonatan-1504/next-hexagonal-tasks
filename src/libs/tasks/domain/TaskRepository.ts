import { Task } from "./Task";
import { TaskListResponse, TaskOneResponse } from "./TaskResponse";

export interface TaskRepository {
  getAll(page: number, signal: AbortSignal): Promise<TaskListResponse>;
  getOneById(id: string, signal: AbortSignal): Promise<TaskOneResponse>;
  save(task: Task): Promise<void>;
  update(task: Task): Promise<void>;
  delete(id: string): Promise<void>;
}
