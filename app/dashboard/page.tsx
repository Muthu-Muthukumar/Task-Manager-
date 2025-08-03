'use client';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TaskBoard from '@/components/TaskBoard';

export default function Dashboard() {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/login');
  }, [user, router]);

  return user ? (
    <div>
      <Navbar />
      <TaskBoard />
    </div>
  ) : null;
}
