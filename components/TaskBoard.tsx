'use client';
import { DndContext } from '@dnd-kit/core';
import TaskColumn from '@/components/TaskColumn';
import { useTaskStore } from '@/store/taskStore';
import { useAuthStore } from '@/store/authStore';
import { Task } from '@/types';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

const columns = ['todo', 'inprogress', 'done'];

export default function TaskBoard() {
  const { tasks, moveTask, addTask } = useTaskStore();
  const { user } = useAuthStore();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      moveTask(active.id, over.id);
    }
  };

  const handleAdd = () => {
    if (title.trim()) {
      addTask({ id: uuid(), title, description: desc, status: 'todo' });
      setTitle('');
      setDesc('');
    }
  };

  return (
    <div className="p-4">
      {user?.role === 'admin' && (
        <div className="mb-4 flex gap-2">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="border p-1" />
          <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Desc" className="border p-1" />
          <button onClick={handleAdd} className="bg-blue-600 text-white px-2">Add</button>
        </div>
      )}
      <DndContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-3 gap-4">
          {columns.map((col) => (
            <TaskColumn key={col} id={col} title={col.toUpperCase()} tasks={tasks.filter((t) => t.status === col)} />
          ))}
        </div>
      </DndContext>
    </div>
  );
}
