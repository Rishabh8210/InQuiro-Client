
import Link from "next/link"


// Large screen nav
export function Navbar() {
    return (
        <div className="hidden h-full w-full md:flex justify-center items-center">
            <div className="h-full w-1/2 flex items-center justify-between">
                <Link className= 'text-lg font-semibold' href='/'>Home</Link>
                <Link className= 'text-lg font-semibold' href='/following'>Following</Link>
                <Link className= 'text-lg font-semibold' href='/answer'>Answer</Link>
                <Link className= 'text-lg font-semibold' href='/notifications'>Notification</Link>
            </div>
        </div>
    )
}

