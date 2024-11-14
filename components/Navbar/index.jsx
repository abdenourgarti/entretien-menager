import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex p-2 bg-slate-300 gap-2'>
      <Link href="/en">Eng</Link>
      <div>|</div>
      <Link href="/fr">FR</Link>
    </div>
  )
}

export default Navbar
