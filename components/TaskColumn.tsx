import { useDroppable } from '@dnd-kit/core';
import TaskCard from './TaskCard';
import { Task } from '@/types';

export default function TaskColumn({ id, title, tasks }: { id: string; title: string; tasks: Task[] }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="bg-gray-100 rounded p-2 min-h-[200px]">
      <h2 className="font-bold mb-2">{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
