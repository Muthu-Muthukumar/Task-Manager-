'use client';

import { DndContext, DragEndEvent } from '@dnd-kit/core';
import TaskColumn from '@/components/TaskColumn';
import AddTaskForm from '@/components/AddTaskForm';
import { useTaskStore } from '@/store/useTaskStore';
import { TaskStatus } from '@/types/task';

export default function BoardPage() {
  const { tasks, moveTask, userRole, setRole } = useTaskStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (over && over.id !== active.id) {
      moveTask(active.id as string, over.id as TaskStatus);
    }
  };

  const groupedTasks: Record<TaskStatus, typeof tasks> = {
    'Todo': [],
    'In Progress': [],
    'Done': [],
  };

  tasks.forEach((task) => groupedTasks[task.status].push(task));

  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Task Board ({userRole})</h1>
        <div>
          <label className="mr-2 font-medium">Role:</label>
          <select
            value={userRole}
            onChange={(e) => setRole(e.target.value as 'admin' | 'user')}
            className="border p-1 rounded"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
      </div>

      {userRole === 'admin' && <AddTaskForm />}

      <DndContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Object.entries(groupedTasks).map(([status, tasks]) => (
            <TaskColumn key={status} status={status as TaskStatus} tasks={tasks} />
          ))}
        </div>
      </DndContext>
    </main>
  );
}
