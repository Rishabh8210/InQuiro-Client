import { Navbar } from "./Navbar"
import { MobileNavbar, SubNavbarMenu } from "./MobileNavbar"
export function HeaderComponent(){
    return (
        <>
            <div className="h-16 w-full px-5 md:px-32 bg-zinc-900 border-b-2">
                <Navbar />
                <MobileNavbar />
            </div>
            <SubNavbarMenu />
        </>
    )
}