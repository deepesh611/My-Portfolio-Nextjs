import { LinkPreview } from "@/components/ui/link-preview";

export const About = () => {
    return (
    <div className="max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-teal-300">About Me</h2>
          <p className="text-base md:text-lg leading-relaxed mb-6 text-center md:text-left">
            I am a dedicated programmer with a strong passion for technology, particularly in the domains of
              {" "}<LinkPreview url="https://aws.amazon.com/what-is-cloud-computing/" className="font-extrabold">
            Cloud Computing
            </LinkPreview>{" "},
              {" "}<LinkPreview url="https://aws.amazon.com/devops/what-is-devops/" className="font-extrabold">
              DevOps
          </LinkPreview>{" "}
            and
            {" "}<LinkPreview url="https://www.cisa.gov/careers/work-rolessystem-administrator" className="font-extrabold">
            System Administration
            </LinkPreview>. 
            I have a keen interest in exploring the latest advancements in these fields and am constantly striving to enhance my knowledge and skills.
            <br/><br/>
            In addition to my technical expertise, I have experience in leadership and teamwork, having led the robotics community of my college. This role allowed me to hone my management skills and collaborate effectively with a diverse group of individuals.
            <br/><br/>
            I am proficient in several programming languages, including
            {" "}<LinkPreview url="https://w3schools.com/python/python_intro.asp" className="font-extrabold">
            Python
            </LinkPreview>, 
            {" "}<LinkPreview url="https://www.w3schools.com/c/c_intro.php" className="font-extrabold">
            C
            </LinkPreview>, and 
            {" "}<LinkPreview url="https://www.geeksforgeeks.org/c-plus-plus/" className="font-extrabold">
            C++
            </LinkPreview>, and I have a solid understanding of frontend technologies such as{" "}<LinkPreview url="https://react.dev/" className="font-extrabold">
            React
            </LinkPreview>,
            {" "}<LinkPreview url="https://nextjs.org/" className="font-extrabold">
            Next.js
            </LinkPreview>, and
            {" "}<LinkPreview url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="font-extrabold">
            JavaScript
            </LinkPreview>. 
            My hands-on experience extends to working with hardware platforms like
            {" "}<LinkPreview url="https://www.arduino.cc/" className="font-extrabold">
            Arduino
            </LinkPreview>,
            {" "}<LinkPreview url="https://www.raspberrypi.com/" className="font-extrabold">
            RaspBerryPi
            </LinkPreview>, and
            {" "}<LinkPreview url="https://www.nvidia.com/en-in/autonomous-machines/embedded-systems/" className="font-extrabold">
            Jetson
            </LinkPreview>, 
            which has deepened my understanding of the intersection between software and hardware.
          </p><br/>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8">
            <div className="text-center mb-6 sm:mb-0">
              <h3 className="text-xl md:text-2xl font-semibold text-teal-300">Achievements</h3>
              <p className="mt-2 text-sm md:text-base">
                Certified Member of{" "}<LinkPreview url="https://www.isc2.org/isc2insights" className="font-extrabold">
                (ISC)²
            </LinkPreview>, <br/>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                President of IIIT Pune's
                {" "}<LinkPreview url="https://github.com/ROFIES-IIITP" className="font-extrabold">
                Robotics Club
                </LinkPreview>, <br/>
                Finalists in Multiple National-Level Hackathons<br/>
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-teal-300">Skills</h3>
              <p className="mt-2 text-sm md:text-base">
                Python, Go, C/C++, DBMS, MERN, <br/>
                Computer Networks, Shell Scripting, <br/>
                Arduino & Raspberry Pi Programming
              </p>
            </div>
          </div>
        </div>
    );
}