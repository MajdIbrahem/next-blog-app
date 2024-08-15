import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = ({post }) => {
    return (
        <div className=' w-[350px] h-[400px]flex flex-col justify-center items-center gap-8  shadow-xl rounded py-5' >
            {post.img && <Image src={post?.img} width={250} height={250} className='object-contain'></Image>}
            <h1 className='text-2xl font-semibold '>{ post.title}</h1>
            <p className='text-gray-400 '>{ post.desc}</p>
            <Link className='text-center ml-24 text-blue-400 font-semibold border-b border-blue-400' href={`/blog/${post.slug}`}>Read More</Link>
        </div>
)
}

export default PostCard