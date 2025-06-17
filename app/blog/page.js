import React from 'react'
import Link from 'next/link';
import axios from 'axios';

export default async function Blog() {
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  const posts = await axios.get(`${baseUrl}/api/posts`)
    .then(res => res.data)
    .catch(err => {
      console.error('Error fetching posts:', err);
      return [];
    });


  return (
    <div>
      <h1 className='text-2xl font-bold'>Blogs</h1>

      <ul>
        {posts.map((post, index) => {
          return (
            <div className='border-b-2 border-gray-200' key={index}>
              <li key={index} className="mt-2 mb-2 font-bold hover:text-blue-400">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
