import { FloatingNavbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { ImageSlider } from "@/components/Image-Slider";
import { AuroraBG } from "@/components/Background";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center scroll-smooth">
      <div className="fixed inset-0 z-[-1] bg-black w-full h-full">
        <AuroraBG />
      </div>
      <FloatingNavbar />
      
      <section id="home" className="relative z-[0] flex flex-col items-center pt-24 md:pt-32 w-full min-h-screen">
        <Header />
      </section>
      
      <section id="about" className="relative z-[0] flex flex-col items-center pt-24 md:pt-32 w-full min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">About Me</h2>
        {/* About section content here */}
      </section>
      
      <section id="certificates" className="relative z-[0] flex flex-col items-center pt-24 md:pt-32 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Certificates</h2>
        <ImageSlider />
      </section>
      
      <section id="contact" className="relative z-[0] flex flex-col items-center pt-24 md:pt-32 w-full min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Contact Me</h2>
        {/* Contact section content here */}
      </section>
    </div>
  );
}
