import PostCard from '@/components/PostCard'
import { getPosts } from '@/lib/data'
import Link from 'next/link'
import React from 'react'
//fetch data with api
// const fetchData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
//   const data= await res.json()
//   return data
// }
const BlogPage = async () => {
  const posts = await getPosts()
  
  return (
    <section className='py-16 mx-16 flex justify-center items-center flex-col'>
      <div className='p-2 bg-slate-400 text-3xl font-semibold text-center w-[50%] cursor-pointer'>
        <Link href='/add'>Add Post</Link>
      </div>
      <div className='flex justify-center items-center gap-8 flex-wrap'>
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} />
        })}
      </div>
    </section>
  )
}

export default BlogPage