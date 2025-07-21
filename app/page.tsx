import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <Link href="/board" className="text-blue-500 underline">Go to Board</Link>
    </main>
  );
}
