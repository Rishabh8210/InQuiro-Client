import React from 'react'

import ProfileDetailComponent from '@/components/ProfileDetailComponenet'
import { HeaderComponent } from '@/components/HeaderComponent'

const page = () => {
    return (
        <>
            <HeaderComponent />
            <div className='min-h-[calc(100vh-4rem)] w-full p-5 flex flex-col'>
                <ProfileDetailComponent />
            </div>
        </>
    )
}

export default page