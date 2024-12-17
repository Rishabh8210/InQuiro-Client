import { HeaderComponent } from "@/components/HeaderComponent";
import { MainBody } from "@/components/MainBody";
import { SubNavbarMenu } from "@/components/MobileNavbar";
export default function Home() {
    return (
        <div className="min-h-screen w-full">
            <HeaderComponent />
            <SubNavbarMenu />
            <MainBody />
        </div>
    );
}
