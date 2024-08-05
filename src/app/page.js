import { FloatingNavbar } from "@/components/Navbar";
import { AuroraBackgroundDemo } from "@/components/Background";
import { ImageSlider } from "@/components/Image-Slider";

export default function Home() {
  return (
    <div className="w-[100vw] flex justify-center">
      <div className="fixed inset-0 z-[-1] bg-black w-[100vw] h-full">
        <AuroraBackgroundDemo />
      </div>
      <FloatingNavbar />
      <div className="relative z-[0] flex pt-[100px] w-[100vw] justify-center"> 
        <ImageSlider />
      </div>
    </div>
  );
}
