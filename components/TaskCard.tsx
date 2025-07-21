'use client';

import { useDraggable } from '@dnd-kit/core';
import { useTaskStore } from '@/store/useTaskStore';
import { Task } from '@/types/task';

export default function TaskCard({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: task.id });
  const { deleteTask, userRole, updateTask } = useTaskStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateTask(task.id, { [e.target.name]: e.target.value });
  };

  return (
    <div ref={setNodeRef} {...listeners} {...attributes}
      className="bg-white p-3 rounded shadow mb-2"
      style={{ transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined }}
    >
      <input
        className="font-semibold w-full"
        name="title"
        value={task.title}
        onChange={handleChange}
      />
      <textarea
        className="w-full text-sm mt-1"
        name="description"
        value={task.description}
        onChange={handleChange}
      />
      {userRole === 'admin' && (
        <button onClick={() => deleteTask(task.id)} className="text-red-500 text-sm mt-1">Delete</button>
      )}
    </div>
  );
}
