import React from 'react';
import Link from 'next/link';
import axios from 'axios';

export default async function Blog() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  let posts = [];

  try {
    const res = await axios.get(`${baseUrl}/api/posts`);
    posts = res.data;
  } catch (err) {
    console.error('Error fetching posts:', err);
  }

  return (
    <div className="flex flex-col items-center min-h-screen py-10 bg-gray-50">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">Blog Posts</h1>
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts found.</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id} className="mb-4">
                <Link
                  href={`/blog/${post.id}`}
                  className="block p-4 transition border border-gray-200 rounded hover:bg-blue-50"
                >
                  <span className="text-xl font-semibold text-blue-700">{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
