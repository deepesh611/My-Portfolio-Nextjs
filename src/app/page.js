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
        <div className="max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-center mb-6 text-teal-300">About Me</h2>
        <p className="text-lg leading-relaxed mb-6">
        I am a dedicated programmer with a strong passion for technology, particularly in the domains of Cyber Security and Network Administration. I have a keen interest in exploring the latest advancements in these fields and am constantly striving to enhance my knowledge and skills.
        <br/><br/>
        In addition to my technical expertise, I have experience in leadership and teamwork, having led the robotics community of my college. This role allowed me to hone my management skills and collaborate effectively with a diverse group of individuals.
        <br/><br/>
        I am proficient in several programming languages, including Python, C, and C++, and I have a solid understanding of frontend technologies such as React, Next.js, and JavaScript. My hands-on experience extends to working with hardware platforms like Arduino, Raspberry Pi, and Jetson, which has deepened my understanding of the intersection between software and hardware.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8">
          <div className="text-center mb-4 sm:mb-0">
            <h3 className="text-2xl font-semibold text-teal-300">Achivements</h3>
            <p className="mt-2">
              Certified Member of (ISC)², <br/>
              President of IIIT Pune's Robotics Club, <br/>
              Finalists in Multiple National-Level Hackathons<br/>
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-teal-300">Skills</h3>
            <p className="mt-2">
              Python, Networking, C/C++, Frontend, <br/>
              Database Management, Shell Scripting
            </p>
          </div>
        </div>
      </div>
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
