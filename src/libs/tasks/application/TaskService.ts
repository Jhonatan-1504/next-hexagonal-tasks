import { ensureId, ensureTitleLength, type Task } from "../domain/Task";
import type { TaskRepository } from "../domain/TaskRepository";

export const createTaskService = (repository: TaskRepository) => ({
  async getAll(page: number, signal: AbortSignal) {
    return repository.getAll(page, signal);
  },
  async getOneById(id: string, signal: AbortSignal) {
    ensureId(id);

    return repository.getOneById(id, signal);
  },
  async save(task: Task) {
    ensureTitleLength(task.title);

    return repository.save(task);
  },
  async update(task: Task) {
    ensureTitleLength(task.title);

    return repository.update(task);
  },
  async delete(id: string) {
    return repository.delete(id);
  },
});
