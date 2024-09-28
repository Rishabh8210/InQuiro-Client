import React from 'react'
import Post from './Post'
import postData from '../utils/postData.json'

export interface PostContentAttributes{
    text: string,
    imageLink?: string
}
export interface PostAttributes{
    name: string,
    username: string,
    content: PostContentAttributes
}

export function MainBody() {
    return (
        <div className='h-full w-full p-3 flex flex-col gap-5'>
            {
                postData.map((data: PostAttributes) => {
                    return <Post {...data}/>
                })
            }
        </div>
    )
}