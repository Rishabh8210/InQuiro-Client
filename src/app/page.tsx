import { HeaderComponent } from "@/components/HeaderComponent";
import {MainBody} from "@/components/MainBody";
export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <HeaderComponent />
      <MainBody />
    </div>
  );
}
