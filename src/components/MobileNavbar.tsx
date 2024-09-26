"use client"
import { useState } from "react"
import Link from "next/link";

interface HandleProps {
    setTrigger: () => void
}

export function MobileNavbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    function handleClick() {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <>
            <div className="md:hidden h-full w-full flex justify-center items-center">
                <div className=" h-full w-full flex items-center justify-between">
                    <img className="dark:invert" src='/hamburger-menu.png' alt="#" onClick={() => handleClick()}/>
                </div>
            </div>
            {isNavOpen && <SidebarMenu setTrigger = {handleClick}/>}
        </>
    )
}

export function SidebarMenu(props: HandleProps) {
    return (
        <div className="h-screen w-full absolute top-0 left-0 p-10 flex flex-col  gap-10 bg-black">
            <div className="w-full h-fit py-5 flex justify-end">
                <img className="invert h-10 pointer" src="/closeButton.png" onClick={() => props.setTrigger()}/>
            </div>
            <ul className="h-fit flex flex-col justify-center items-center border-2 rounded-md w-full ">
                <li className="p-5 h-fit"><Link className= 'text-lg text-red-600 font-semibold' href='/'>Home</Link></li>
                <li className="p-5 h-fit"><Link className= 'text-lg font-semibold' href='/following'>Following</Link></li>
                <li className="p-5 h-fit"><Link className= 'text-lg font-semibold' href='/answer'>Answer</Link></li>
                <li className="p-5 h-fit"><Link className= 'text-lg font-semibold' href='/notifications'>Notification</Link></li>
            </ul>
        </div>
    )
}