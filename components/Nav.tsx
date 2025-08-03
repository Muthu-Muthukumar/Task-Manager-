
'use client';

import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="w-full h-16 bg-gray-800 flex items-center justify-between px-6 shadow-md">
      <Link href="/" className="text-white text-xl font-bold">Task Manager</Link>
      <div className="space-x-4">
        <Link href="/login" className="text-gray-300 hover:text-white">Login</Link>
        <Link href="/signup" className="text-gray-300 hover:text-white">Sign Up</Link>
      </div>
    </nav>
  );
}
