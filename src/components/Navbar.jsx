"use client"
import React, { useState } from 'react'
import NavLink from './NavLink'
const Navbar = () => {
    const session = false
    const isAdmin = true
    const [open,setOpen]=useState(false)
    const links = [{ title: "Home", path: "/" }
        , { title: "About", path: "/about" }
        , { title: "Contact", path: "/contact" }
        , { title: "Blog", path: "/blog" }
    ]
    
    return (
    
    <div className='flex justify-between items-center py-5 mx-16 top-0 border-b w-[90%] fixed'>
        <div className='text-2xl font-bold'>Demo App</div>
        <div className=' hidden md:flex items-center justify-between gap-5  text-lg font-semibold'>
            {links.map(link => {
            return <NavLink item={link}/>
        })}
            
        </div>
        <div className='md:hidden flex '>
            <button onClick={()=>{setOpen((prev)=>!prev)}}>
                <svg class="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
                <div className={open?"w-2/5 absolute top-12 right-0 h-full py-16 px-16 rounded bg-purple-400/50":"hidden"}>
                <div className=' flex flex-col  items-center justify-between gap-5  text-lg font-semibold'>
                    {links.map(link => {
                        return <NavLink item={link} key={ link.title} />
                        })}
                    
        </div>
                </div>
            </button>
        </div>
    </div>
)
}

export default Navbar