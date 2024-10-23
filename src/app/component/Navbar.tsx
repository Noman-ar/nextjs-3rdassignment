import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='py-4 bg-gray-800'>
    <nav className='flex items-center justify-between px-6'>
    <div className='text-2xl text-red-800'>
        <ul className='flex gap-4' >
        <li><Link href="/" className='text-white underline decoration-red-500    
        hover:text-blue-500 cursor-pointer' >Home</Link></li>
        <li><Link href="/About" className='text-white underline decoration-red-500 hover:text-blue-500 cursor-pointer' >About</Link></li>
        <li><Link href="/Services" className='text-white underline decoration-red-500 hover:text-blue-500 cursor-pointer'>Services</Link></li>
        <li><Link href="Contact" className='text-white underline decoration-red-500 hover:text-blue-500 cursor-pointer'>Contact</Link></li>
      </ul>
      </div>
      </nav>
      </header>
  )
}

export default Navbar