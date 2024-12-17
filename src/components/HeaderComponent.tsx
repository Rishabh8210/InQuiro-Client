import { Navbar } from "./Navbar"
import { MobileNavbar } from "./MobileNavbar"
export function HeaderComponent(){
    return (
        <div className="h-16 z-50 w-full px-5 md:px-32 bg-zinc-900 border-b-2 sticky top-0">
            <Navbar />
            <MobileNavbar />
        </div>
    )
}