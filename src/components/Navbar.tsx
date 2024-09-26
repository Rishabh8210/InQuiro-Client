
import Link from "next/link"
import { Logo } from "./LogoComponent"


// Large screen nav
export function Navbar() {
    return (
        <div className="hidden h-full w-full md:flex gap-16 justify-center items-center">
            <Logo />
            <div className="h-full w-1/2 flex items-center justify-between">
                <Link className= 'text-lg font-semibold text-red-600' href='/'>Home</Link>
                <Link className= 'text-lg font-semibold' href='/following'>Following</Link>
                <Link className= 'text-lg font-semibold' href='/answer'>Answer</Link>
                <Link className= 'text-lg font-semibold' href='/notifications'>Notification</Link>
            </div>
        </div>
    )
}

