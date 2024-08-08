import { FloatingNavbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { ImageSlider } from "@/components/Image-Slider";
import { AuroraBG } from "@/components/Background";
import { Timeline } from "@/components/Education";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center scroll-smooth">
      <div className="fixed inset-0 z-[-1] bg-black w-full h-full">
        <AuroraBG />
      </div>
      <FloatingNavbar />

      <section id="home" className="relative z-[0] flex flex-col items-center pt-16 md:pt-16 w-full min-h-screen px-4">
        <Header />
      </section>

      <section id="about" className="relative z-[0] flex flex-col items-center pt-16 md:pt-24 w-full min-h-screen px-4">
        <About />
      </section>

      <section id="projects" className="relative z-[0] flex flex-col items-center pt-16 md:pt-24 w-full min-h-screen px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">My Work</h2>
        
      </section>

      <section id="certificates" className="relative z-[0] flex flex-col items-center pb-20 pt-16 md:pt-24 w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Certificates</h2>
        <ImageSlider />
      </section>

      <section id="education" className="relative z-[0] flex flex-col items-center pb-20 pt-16 md:pt-24 w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Education</h2>
        <Timeline />
      </section>
    </div>
  );
}
