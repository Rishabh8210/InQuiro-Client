"use client"
import { useState } from "react"
import Link from "next/link";
import { Logo } from "./LogoComponent";

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
            <div className="md:hidden h-full w-full flex justify-between items-center">
                <div className=" h-full w-fit flex items-center ">
                    <img className="dark:invert" src='/hamburger-menu.png' alt="#" onClick={() => handleClick()}/>
                </div>
                <Logo />
                <div className="h-fit w-fit">
                    <Link href='/post'><img className="invert" src="/addButton.png"/></Link>
                </div>
            </div>
            {isNavOpen && <SidebarMenu setTrigger = {handleClick}/>}
        </>
    )
}

export function SidebarMenu(props: HandleProps) {
    return (
        <div className="h-screen z-10 w-full absolute top-0 left-0 p-10 flex flex-col  gap-10 bg-black">
            <div className="w-full h-fit py-5 flex justify-end">
                <img className="dark:invert h-9 pointer" src="/closeButton.png" onClick={() => props.setTrigger()}/>
            </div>
            <ul className="h-fit flex flex-col justify-center items-center border-2 border-white border-opacity-40 rounded-md w-full ">
                <li className="p-5 h-fit"><Link className= 'text-2xl text-red-600 font-semibold' href='/'>Home</Link></li>
                <li className="p-5 h-fit"><Link className= 'text-2xl font-semibold' href='/following'>Following</Link></li>
                <li className="p-5 h-fit"><Link className= 'text-2xl font-semibold' href='/answer'>Answer</Link></li>
                <li className="p-5 h-fit"><Link className= 'text-2xl font-semibold' href='/notifications'>Notification</Link></li>
            </ul>
        </div>
    )
}

export function SubNavbarMenu() {
    return (
        <div className="md:hidden h-14 w-full flex justify-center items-center bg-zinc-900 border-b-2 border-opacity-40 ">
            <Link href='/' className="h-full px-5 w-fit flex-shrink-0 flex justify-center items-center border-r-2">
                <img className="h-7 " src="/homeButton.png"/>
            </Link>
            <Link href='/followings' className="h-full px-5 flex-shrink-0 w-fit flex justify-center items-center border-r-2">
                <img className="h-7 dark:invert" src="/followingButton.png"/>
            </Link>
            <Link href='/answers' className="h-full px-5 flex-shrink-0 w-fit flex justify-center items-center border-r-2">
                <img className="h-7 dark:invert" src="/notesButton.png"/>
            </Link>
            <Link href='/notifications' className="h-full px-5 flex-shrink-0 w-fit flex justify-center items-center border-r-2">
                <img className="h-7 dark:invert" src="/notificationsButton.png"/>
            </Link>
            <Link href='/profile' className="h-full px-5 flex-shrink-0 w-fit flex justify-center items-center ">
                <img className="h-7 dark:invert" src="/userButton.png"/>
            </Link>
        </div>
    )
}