import React from 'react'
import Post from './Post'
import postData from '../utils/postData.json'
import QuickPostShare from './QuickPostShareComponent'

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
            <QuickPostShare />
            {
                postData.map((data: PostAttributes, ind) => {
                    return <Post {...data} key={ind}/>
                })
            }
        </div>
    )
}