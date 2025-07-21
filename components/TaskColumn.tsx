'use client';

import { useDroppable } from '@dnd-kit/core';
import TaskCard from './TaskCard';
import { Task } from '@/types/task';

export default function TaskColumn({ status, tasks }: { status: Task['status'], tasks: Task[] }) {
  const { setNodeRef } = useDroppable({ id: status });

  return (
    <div ref={setNodeRef} className="bg-gray-100 p-4 w-full rounded">
      <h2 className="text-lg font-bold mb-2">{status}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
