"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

const NavLink = ({ item }) => {
    const pathName=usePathname()
return (
    <Link href={item.path} key={item.title} className={pathName===item.path ?"text-black bg-white/60 p-1 rounded-lg":""}>{ item.title}</Link>
)
}

export default NavLink