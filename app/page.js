import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <a className='block' href="/blog">blog</a>
      <Link href="/blog">Blog</Link>
    </div>
  );
}
