'use client';

import { useState } from 'react';
import { useTaskStore } from '@/store/useTaskStore';
import { Task } from '@/types/task';

export default function AddTaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const addTask = useTaskStore((s) => s.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      status: 'Todo',
    };
    addTask(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 border shadow rounded">
      <input className="w-full mb-2 p-1" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea className="w-full mb-2 p-1" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button className="bg-blue-500 text-white px-3 py-1 rounded" type="submit">Add Task</button>
    </form>
  );
}
