import { getPost, getUser } from '@/lib/data'
import Image from 'next/image'
import React from 'react';
export const generateMetadata = async ({ params }) => {
  const { slug } = params
  const post = await getPost(slug)
  return {
    title: post.title,
    description:post.desc,
  }
}
// fetch data with api 
// const fetchData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`); 
//   const data= await res.json()
//   return data
// }
// const fetchuser = async (userid) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`); 
//   const data= await res.json()
//   return data
// }
const SinglePostPage = async({ params }) => {
  const { slug } = params
  const post = await getPost(slug)
  const user = await getUser(post.userId)
  // const post = await fetchData(slug)
  // const user =await fetchuser(post.userId)
  return (
    <section className="mx-16 py-16">
      <div className="flex justify-center items-center gap-16  w-full flex-wrap flex-col md:flex-row">
        <div className="">
          <Image src={post?.img} width={400} height={400} alt='hero'></Image>
        </div>
        <div className="flex flex-col justify-start items-center gap-10  w-2/4">
          <h1 className='text-4xl font-bold'>{post.title}</h1>
          <div className='flex justify-center items-center gap-6'>
            
            <div className='flex flex-col'>
              <span>Author</span>
              <span className='text-gray-400'>{user?.name}</span>
            </div>
            <div className='flex flex-col'>
              <span>Email</span>
              <span className='text-gray-400'>{ user?.email}</span>
            </div>
          </div>
          <p className='text-center text-gray-300'>{ post.desc}</p>
        </div>
      </div>
    </section>
  )
}

export default SinglePostPage