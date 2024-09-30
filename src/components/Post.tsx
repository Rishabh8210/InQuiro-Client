"use client"
import React, { useState } from 'react'
import ProfileHeader from './ProfileHeader'
import Link from 'next/link'
import { PostAttributes } from './MainBody'
export const Post = (postData: PostAttributes) => {
    const [isContentLong, setContentLong] = useState(false);
    const [resizeTextContent, setResizedTextContent] = useState(postData.content.text)

    function checkTextSize() {
        const requiredTextSize = (postData.content.imageLink) ? 200 : 300;  
        let newResizedTextContent = '';
        if (resizeTextContent.length > requiredTextSize) {
            newResizedTextContent = resizeTextContent.slice(0, requiredTextSize);
            console.log(resizeTextContent);
            setContentLong(true);
            setResizedTextContent(newResizedTextContent);
        }
    }
    checkTextSize()
    return (
        <div className='h-fit w-full border-2 p-2 rounded-lg border-opacity-5'>
            <ProfileHeader {...postData} />
            <div className='h-fit w-full p-2 flex flex-col gap-3'>
                {/* Post Content */}
                <div>
                    <p className='inine-block'>{resizeTextContent}{isContentLong && <Link className='text-blue-600 inline-block' href=''>(Show more)</Link>} </p>
                </div>

                {/* Post Images */}
                {
                    postData.content.imageLink && <div className='h-fit w-full flex justify-center items-center'>
                        <img src={postData.content.imageLink} alt='image' />
                    </div>
                }

                {/* Likes comments share etc */}
                <div className='h-fit w-full flex justify-between items-center'>
                    <button><img className='dark:invert h-6' src='/commentButton.png'/></button>
                    <button><img className='dark:invert h-6' src='/likeButton.png'/></button>
                    <button><img className='dark:invert h-6' src='/shareButton.png'/></button>
                    <button><img className='dark:invert h-6' src='/sendMessageButton.png'/></button>
                </div>
            </div>
        </div>
    )
}

export default Post