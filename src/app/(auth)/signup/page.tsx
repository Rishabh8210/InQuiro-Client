import React from 'react'
import { SignupComponent } from '@/components/SigupComponent'
import { Logo } from '@/components/LogoComponent'
import Link from 'next/link'
const Signup = () => {
  return (
    <div className="h-screen w-full flex justify-center px-5 bg-[url('/quoraBG.webp')] dark:bg-[url('/quoraBG.webp')] bg-black items-center">
      <div className="h-fit w-full flex flex-col py-7 px-10 gap-3 bg-zinc-900 rounded-t-xl">
          <Logo />
          <p>A place to share knowledge and better understand the world</p>
          <SignupComponent />
          <span className='font-medium'>Already have an account? <Link className='font-semibold text-red-600' href='/signin'>Sign in</Link></span> 
      </div>
    </div>
  )
}

export default Signup