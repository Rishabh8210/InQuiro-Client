import React from 'react'
import { PostAttributes } from './MainBody'
export const ProfileHeader = (data: Partial<PostAttributes>) => {
  return (
    <div className='h-fit w-full flex items-center gap-3'>
        <div className='size-12 rounded-full overflow-hidden'>
            <img className='dark:invert w-full h-full' src={data?.content?.imageLink || '/userButton.png'}/>
        </div>
        <div className=' gap-1 items-center'>
            <p className='font-bold leading-tight font-sans'>{data.name}</p>
            <p className='leading-none opacity-35 font-sans'>@{data.username}</p>
        </div>
    </div>
  )
}

export default ProfileHeader