import Link from 'next/link'
import React from 'react'

const ProfileDetailComponent = () => {
  return (
    <>
      <div className='h-fit w-full flex justify-between items-center text-sm shrink-0 border-b-2 py-10'>
          {/* Profile image "Adding default image" */}
          <div className='size-28 flex justify-center items-center '>
              <img className='w-full dark:invert' src='/userButton.png'/>
          </div>
          <div className='min-h-32 w-fit flex flex-col justify-center gap-1'>
              <p className='text-lg font-semibold'>Rishabh Pandey</p>
              <p className='opacity-50'>@rishabh8210</p>
              <div className='flex h-fit w-full gap-3'>
                <p><Link className='font-semibold' href={'/followers'}>112 Followers</Link></p>
                <p><Link className='font-semibold' href={'/following'}>120 Following</Link></p>
              </div>
              <div className='h-fit pt-1 w-full flex items-center '>
                  <button className='h-10 w-24  rounded-lg text-md font-semibold border-2 bg-zinc-800 text-red-600'>Edit</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default ProfileDetailComponent