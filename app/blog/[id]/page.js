import React from 'react';
import axios from 'axios';

// This is your page component, now an async Server Component
export default async function BlogPost({ params }) {
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const post = await axios.get(`${baseUrl}/api/posts/${params?.id}`)
    .then(res => res.data)
    .catch(err => {
      console.error('Error fetching post:', err);
      return null;
    });
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='p-4'>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold'>{post.title}</h1>
        <p className='text-sm'>By: {post.author}</p>
        <p className='text-sm'>Date: {post.date}</p>
      </div>
        <p>{post.content}</p>
    </div>
  );
}
