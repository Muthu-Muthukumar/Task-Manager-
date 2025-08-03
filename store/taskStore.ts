import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task } from '@/types';

type TaskState = {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  moveTask: (id: string, newStatus: 'todo' | 'inprogress' | 'done') => void;
};

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task: Task) =>
        set((state) => ({
          tasks: [...state.tasks, task]
        })),
      deleteTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id)
        })),
      moveTask: (id: string, newStatus: 'todo' | 'inprogress' | 'done') =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, status: newStatus } : t
          )
        })),
    }),
    { name: 'tasks' }
  )
);
