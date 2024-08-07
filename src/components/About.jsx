export const About = () => {
    return (
    <div className="max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-teal-300">About Me</h2>
          <p className="text-base md:text-lg leading-relaxed mb-6 text-center md:text-left">
            I am a dedicated programmer with a strong passion for technology, particularly in the domains of Cyber Security and Network Administration. I have a keen interest in exploring the latest advancements in these fields and am constantly striving to enhance my knowledge and skills.
            <br/><br/>
            In addition to my technical expertise, I have experience in leadership and teamwork, having led the robotics community of my college. This role allowed me to hone my management skills and collaborate effectively with a diverse group of individuals.
            <br/><br/>
            I am proficient in several programming languages, including Python, C, and C++, and I have a solid understanding of frontend technologies such as React, Next.js, and JavaScript. My hands-on experience extends to working with hardware platforms like Arduino, Raspberry Pi, and Jetson, which has deepened my understanding of the intersection between software and hardware.
          </p><br/>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8">
            <div className="text-center mb-6 sm:mb-0">
              <h3 className="text-xl md:text-2xl font-semibold text-teal-300">Achievements</h3>
              <p className="mt-2 text-sm md:text-base">
                Certified Member of (ISC)², <br/>
                President of IIIT Pune's Robotics Club, <br/>
                Finalists in Multiple National-Level Hackathons<br/>
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-teal-300">Skills</h3>
              <p className="mt-2 text-sm md:text-base">
                Python, Networking, C/C++, Frontend, <br/>
                Database Management, Shell Scripting, <br/>
                Arduino & RaspBerry Pi Programming
              </p>
            </div>
          </div>
        </div>
    );
}