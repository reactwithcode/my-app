import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-2 text-3xl font-extrabold text-gray-800">Welcome to My Blog</h1>
        <p className="mb-6 text-lg text-gray-600">Discover posts, tutorials, and more.</p>
        <Link
          href="/blog"
          className="px-6 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
        >
          Go to Blog
        </Link>
      </div>
    </div>
  );
}
