import React from 'react'
import { SigninComponent } from '@/components/SigninComponent'
import { Logo } from '@/components/LogoComponent'
import Link from 'next/link'
const Signin = () => {
  return (
    <div className="h-screen w-full flex justify-center px-5 bg-[url('/QuoraBG.jpg')] dark:bg-[url('/QuoraBG.jpg')] bg-black items-center">
      <div className="h-fit w-full flex flex-col py-7 px-10 gap-5 bg-zinc-900 rounded-b-xl">
          <Logo />
          <p>Unlock curiosity, one question at a time.</p>
          <h3 className='text-2xl font-bold text-center underline text-red-600 font-serif'>Sign In</h3>
          <SigninComponent />
          <span className='font-medium'>Create a new account? <Link className='font-semibold text-red-600 underline underline-offset-2' href='/signup'>Sign up</Link></span> 
      </div>
    </div>
  )
}

export default Signin