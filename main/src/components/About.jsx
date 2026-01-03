
export const About = () => {
    return (
    <div className="max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-teal-300">About Me</h2>
          <p className="text-base md:text-lg leading-relaxed mb-6 text-center md:text-left">
              I am a dedicated programmer with a strong passion for technology, particularly in the domains of <b>Cloud Computing, DevOps Automation</b> and <b>System Administration</b>. I have a keen interest in exploring the latest advancements in these fields and am constantly striving to enhance my knowledge and skills.
            <br/><br/>
            In addition to my technical expertise, I have experience in leadership and teamwork, having led the robotics community of my college. This role allowed me to hone my management skills and collaborate effectively with a diverse group of individuals.
            <br/><br/>
            I am proficient in several programming languages, including <b>Python, Go, C/C++</b>, and I have a solid understanding of frontend technologies such as <b>React, Next.js and JavaScript </b>. My hands-on experience extends to working with hardware platforms like <b>Arduino, RaspBerryPi and Jetson</b> which has deepened my understanding of the intersection between software and hardware.
          </p><br/>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8">
            <div className="text-center mb-6 sm:mb-0">
              <h3 className="text-xl md:text-2xl font-semibold text-teal-300">Achievements</h3>
              <p className="mt-2 text-sm md:text-base">
                Certified Member of <b>(ISC)² </b>, <br/>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <b>Co-Head</b> of <b>IIIT Pune's Robotics Club</b>, <br/>
                Finalists in Multiple National-Level Hackathons<br/>
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-teal-300">Skills</h3>
              <p className="mt-2 text-sm md:text-base">
                Python, Go, C/C++, DBMS, MERN, <br/>
                Computer Networks, AI Automation, <br/>
                Server & Network Management
              </p>
            </div>
          </div>
        </div>
    );
}