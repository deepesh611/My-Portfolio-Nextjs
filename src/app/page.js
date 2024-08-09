import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Education";
import { AuroraBG } from "@/components/Background";
import { FloatingNavbar } from "@/components/Navbar";
import { ImageSlider } from "@/components/Image-Slider";

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
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-12">
          My Projects
        </h2>
        <Projects />
      </section>

      <section id="certificates" className="relative z-[0] flex flex-col items-center pb-20 pt-16 md:pt-24 w-full px-4">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-12">Certificates</h2>
        <ImageSlider />
      </section>

      <section id="education" className="relative z-[0] flex flex-col items-center pb-20 pt-16 md:pt-24 w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Education</h2>
        <Timeline />
      </section>

    </div>
  );
}
