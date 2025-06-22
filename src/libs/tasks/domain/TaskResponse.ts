import { Task } from "./Task";

export interface TaskListResponse {
  data: Task[];
  previous: number | null;
  next: number | null;
  message: "OK" | string;
  status: boolean;
  count: number;
}

export interface TaskOneResponse {
  data: Task;
  message: string;
  status: boolean;
}
