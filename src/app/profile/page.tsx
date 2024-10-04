import React from 'react'

import { MobileNavbar } from '@/components/MobileNavbar'
import ProfileDetailComponent from '@/components/ProfileDetailComponenet'
const page = () => {
  return (
    <div className='min-h-screen w-full p-5 sticky top-0 flex flex-col'>
        <MobileNavbar />
        <ProfileDetailComponent />
    </div>
  )
}

export default page