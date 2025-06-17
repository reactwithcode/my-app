import React from 'react';
import axios from 'axios';

export default async function BlogPost({ params }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  let post = null;
  try {
    const res = await axios.get(`${baseUrl}/api/posts/${params?.id}`);
    post = res.data;
  } catch (err) {
    console.error('Error fetching post:', err);
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="p-8 text-center bg-white rounded shadow">
          <h2 className="mb-2 text-xl font-bold text-gray-700">Post not found</h2>
          <p className="text-gray-500">Sorry, the post you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">{post.title}</h1>
        <div className="flex gap-4 mb-4 text-sm text-gray-500">
          <span>By: {post.author}</span>
          <span>Date: {post.date}</span>
        </div>
        <div className="leading-relaxed text-gray-700">{post.content}</div>
      </div>
    </div>
  );
}
