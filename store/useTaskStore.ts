'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task } from '@/types/task';

interface TaskStore {
  tasks: Task[];
  userRole: 'admin' | 'user';
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, data: Partial<Task>) => void;
  moveTask: (id: string, newStatus: Task['status']) => void;
  setRole: (role: 'admin' | 'user') => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      userRole: 'admin',

      addTask: (task) =>
        set((state) => ({ tasks: [...state.tasks, task] })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      updateTask: (id, data) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...data } : task
          ),
        })),

      moveTask: (id, newStatus) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status: newStatus } : task
          ),
        })),

      setRole: (role) => set(() => ({ userRole: role })),
    }),
    { name: 'task-store' }
  )
);
