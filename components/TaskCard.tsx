import { useDraggable } from '@dnd-kit/core';
import { Task } from '@/types';
import { useAuthStore } from '@/store/authStore';
import { useTaskStore } from '@/store/taskStore';

export default function TaskCard({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: task.id });
  const { user } = useAuthStore();
  const { deleteTask } = useTaskStore();

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
  };

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}
      className="bg-white p-2 rounded shadow mb-2">
      <div className="font-bold">{task.title}</div>
      <p>{task.description}</p>
      {user?.role === 'admin' && (
        <button onClick={() => deleteTask(task.id)} className="text-sm text-red-600 mt-1">Delete</button>
      )}
    </div>
  );
}
