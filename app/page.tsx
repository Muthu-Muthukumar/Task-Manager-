'use client';

import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Task Manager</h1>
        <p className="text-lg text-gray-400 mb-8">
          Organize, assign, and track tasks effortlessly with role-based access.
        </p>

        <div className="flex space-x-4">
          <button
            onClick={() => router.push('/login')}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
          >
            Login
          </button>
          <button
            onClick={() => router.push('/signup')}
            className="px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition text-white font-semibold"
          >
            Sign Up
          </button>
        </div>
      </div>
    </main>
  );
}
