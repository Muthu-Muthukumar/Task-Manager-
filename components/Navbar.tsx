'use client';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <span className="font-bold">Task Manager</span>
      <div>
        <span className="mr-4">{user?.username} ({user?.role})</span>
        <button
          onClick={() => {
            logout();
            router.push('/login');
          }}
          className="bg-white text-blue-600 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
