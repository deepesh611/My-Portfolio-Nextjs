import { FloatingNavbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { ImageSlider } from "@/components/Image-Slider";
import { AuroraBackgroundDemo } from "@/components/Background";

export default function Home() {
  return (
    <div className="container flex flex-col items-center scroll-smooth">
      <div className="fixed inset-0 z-[-1] bg-black w-full h-full">
        <AuroraBackgroundDemo />
      </div>
      <FloatingNavbar />
      
      <section id="home" className="relative z-[0] flex pt-[100px] w-full justify-center min-h-[100vh]">
        <Header />
      </section>
      
      <section id="about" className="relative z-[0] flex pt-[100px] w-full justify-center min-h-[100vh]">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">About Me</h2>
        {/* About section content here */}
      </section>
      
      <section id="certificates" className="relative z-[0] flex pt-[100px] w-full justify-center">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Certificates</h2>
      </section>
        <ImageSlider />
      
      <section id="contact" className="relative z-[0] flex pt-[100px] w-full justify-center min-h-[100vh]">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Contact Me</h2>
        {/* Contact section content here */}
      </section>
    </div>
  );
}
