import { MobileNavbar } from '@/components/MobileNavbar'
import ProfileHeader from '@/components/ProfileHeader'
import React from 'react'
import peopleData from '../../utils/postData.json'
const page = () => {
    return (
        <div className='min-h-screen w-full px-5 py-3.5 sticky top-0 gap-4 flex flex-col'>
            <MobileNavbar />
            <div className='h-fit w-full flex flex-col py-3 gap-4 border-t-2'>
                <h1 className='text-[22px] font-semibold font-serif'>Followings</h1>
                <div className='h-[80vh] w-full flex flex-col gap-5 overflow-y-auto'>
                    {
                        peopleData.map((people) => {
                            return <ProfileHeader {...people} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default page