import { ITask } from "./type/type";

const TASKS_STORAGE_KEY = "task";

export const loadTasksFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const tasks = localStorage.getItem(TASKS_STORAGE_KEY);
    return tasks ? JSON.parse(tasks) : null;
  }
  return null; 
};

export const saveTasksToLocalStorage = (tasks: ITask[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }
};
