import { Navbar } from "./Navbar"
import { MobileNavbar } from "./MobileNavbar"
export function HeaderComponent(){
    return (
        <div className="h-16 w-full px-7 md:px-32 bg-zinc-900">
            <Navbar />
            <MobileNavbar />
        </div>
    )
}