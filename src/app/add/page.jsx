import { addPost ,addUser} from '@/lib/action'
import React from 'react'

const Addpage = () => {
    return (
        <div className='mx-16 py-16 flex justify-center items-center flex-col gap-12'>
            <form
                action={addPost}
                className='flex flex-col item-center justify-center gap-6 w-[50%]'>
                <input className='w-4/5 h-[50px] bg-gray-300/60 text-black p-5 rounded-lg' type="text" placeholder="Title"  name='title'/>
                <input className='w-4/5 h-[50px] bg-gray-300/60 text-black p-5 rounded-lg'  type="text" placeholder="User Id"  name='userId'/>
                <input className='w-4/5 h-[50px] bg-gray-300/60 text-black p-5 rounded-lg' type="text" placeholder="slug"  name='slug'/>
                <input className='w-4/5 h-[50px] bg-gray-300/60 text-black p-5 rounded-lg' type="text" placeholder="desc"  name='desc'/>
                <input className='w-4/5 h-[50px] bg-gray-300/60 text-black p-5 rounded-lg' type="text" placeholder="Image Url"  name='img'/>
                <button type='submit' className='w-3/5 bg-blue-400 ml-8 text-black px-5 py-2 rounded-lg font-semibold text-lg '>Add The Post</button>
            </form>
            <h1 className='text-2xl font-bold text-slate-200 text-center mr-32'>User Info</h1>
            <form
                action={addUser}
                className='flex flex-col item-center justify-center gap-6 w-[50%]'>
                <input className='w-4/5 h-[50px] bg-gray-300/60 text-black p-5 rounded-lg' type="text" placeholder="username"  name='username'/>
                <input className='w-4/5 h-[50px] bg-gray-300/60 text-black p-5 rounded-lg'  type="email" placeholder="email"  name='email'/>
                <input className='w-4/5 h-[50px] bg-gray-300/60 text-black p-5 rounded-lg' type="password" placeholder="slug"  name='password'/>
                <button type='submit' className='w-3/5 bg-blue-400 ml-8 text-black px-5 py-2 rounded-lg font-semibold text-lg '>Add The User</button>
        </form>
    </div>
)
}

export default Addpage