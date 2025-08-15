import "../assets/icons/heimdall-icon-large2.webp";
import {
  FaCloud,
  FaJava,
  FaLock,
  FaPython,
  FaServer,
} from "react-icons/fa";

import { MdDashboard } from "react-icons/md";

import {
    SiC,
    SiGo,
    SiPlex,
    SiMysql,
    SiNginx,
    SiShell,
    SiDocker,
    SiGnubash,
    SiCockpit,
    SiJupyter,
    SiJellyfin,
    SiPortainer,
    SiPowershell,
    SiTensorflow,
    SiKubernetes,
    SiRaspberrypi, SiTypescript, SiN8N,
} from "react-icons/si";


export function Projects() {
  const currentProjects = [

  ];

  const completedProjects = [
      {
          title: "RDBMS with MySQL via n8n",
          image: "https://www.shutterstock.com/image-illustration/dbms-database-management-system-concept-600nw-2391827465.jpg",
          description: "Member Management System with n8n workflows for tracking information, relationships, and analytics without backend code.",
          link: "https://github.com/deepesh611/DBMS-with-n8n",
          languages: [<SiDocker key="docker"/>, <SiN8N key="n8n"/>, <SiMysql key="mysql"/>, <SiTypescript key="ts"/>]
      },
    {
      title: "DDoS on Cloud Architecture",
      image: "https://img.freepik.com/premium-photo/3d-rendering-circuit-cloud-with-server-computer_493806-486.jpg?ga=GA1.1.1069163389.1745317973&semt=ais_hybrid&w=740",
      description: "Design and Implementation of a Detection and Prevention System for DDoS Attacks on Cloud-Based Servers",
      link: "https://github.com/deepesh611/Minor-Project-DDoS-on-Cloud",
      languages: [<SiDocker key="docker"/>, <FaCloud key="cloud"/>, <FaPython key="python"/>,<SiGnubash key="bash" />, <SiTensorflow key='tensorflow'/>, <SiNginx key="nginx" />]
    },
    {
      title: "Home Server",
      image: "https://c4.wallpaperflare.com/wallpaper/115/630/492/server-depth-of-field-hardware-machine-wallpaper-preview.jpg",
      description: "Build your own Media Server, VPN Server, or host any other types of services from your Home.",
      link: "https://github.com/deepesh611/Home-Server",
      languages: [<FaServer key="server"/>,<SiDocker key="docker"/>, <SiPlex key="plex"/>, <SiPortainer key="portainer"/>]
    },
    {
      title: "IIITP Hub",
      image: "https://cdn.pixabay.com/photo/2016/08/12/05/06/technology-1587673_1280.jpg",
      description: "A hub for students and faculty to share resources, events, and other information. It also includes a media server for hosting videos and other media files.",
      link: "https://github.com/deepesh611/IIITP-Hub",
      languages: [<FaServer key="server"/>,<SiDocker key="docker"/>, <SiJellyfin key="jellyfin"/>, <SiPortainer key="portainer"/>, <SiCockpit key="cockpit"/>, <MdDashboard key="dashboard"/>]
    },
    {
      title: "Eagle Encryptor",
      image: "https://wallpapers.com/images/hd/secure-digital-data-encryption-5mzhii44tfcny1fe.jpg",
      description: "A Desktop CLI encryption Application that can secure files with various formats",
      link: "https://github.com/deepesh611/Eagle-Encryptor",
      languages: [<FaPython key="python"/>, <FaLock key="lock"/>]
    },
    {
      title: "Password Managers",
      image: "https://imgs.search.brave.com/KDNRjfN9FYqENHBV9M7hDo0zoYxY9IyBHP_GyGt7uh4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/OTIyMDc4Ni9waG90/by9tYW4td29ya2lu/Zy1vbi1sYXB0b3At/bmV0d29yay1ncmFw/aGljLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0yWUIxYXRB/R2hOYWxFQ2JENUZt/N1dXNVlBcVpDOW5G/cTRlZHBBdG93QTlB/PQ",
      description: "Creating a Password manager that can store and manage passwords securely. This project mostly aims on practical implementation of new programming languages that I am learning.",
      link: "https://github.com/deepesh611/Password-Managers",
      languages: [<SiGo key="go"/>, <SiPowershell key="powershell"/>, <SiGnubash key="bash" />]
    },
    {
      title: "Automation Projects",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "A comprehensive set of scripts aimed at streamlining daily tasks by automating processes, enhancing productivity and efficiency.",
      link: "https://github.com/deepesh611/Learning-Automation",
      languages: [<FaPython key="python"/>, <SiJupyter key='jupyter'/>]
    },
    {
      title: "My Shell",
      image: "https://images.unsplash.com/photo-1629654291663-b91ad427698f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A functional copy of terminal made in C",
      link: "https://github.com/deepesh611/My_Shell",
      languages: [<SiC key='c'/>]
    },
    {
      title: "University Management System",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/9/CB/RU/TD/135088364/marg-erp-software-500x500.jpeg",
      description: "A very basic database management system with MySQL in the backend and Swing in the Frontend GUI",
      link: "https://github.com/deepesh611/University-Management-System",
      languages: [<FaJava key="java"/>, <SiMysql key='mysql'/>]
    },
    {
      title: "Raspberry-Pi Projects",
      image: "https://images.unsplash.com/photo-1610812387871-806d3db9f5aa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFzcGJlcnJ5JTIwcGl8ZW58MHx8MHx8fDA%3D",
      description: "Using Raspberry Pi for practical tasks like setting up a web server, hosting sites on the dark web, and building a portable NAS for easy file storage and access. These projects cover a range of uses, making the most of the Raspberry Pi's capabilities in networking and storage.",
      link: "https://github.com/ROFIES-IIITP/Raspberry-Pi",
      languages: [<SiRaspberrypi key="raspberrypi"/>, <SiKubernetes key="K3S"/>, <SiPowershell key='powershell'/>, <SiDocker key='docker'/>]
    },
    // {
    //   title: "Arduino Projects",
    //   image: "https://cdn.pixabay.com/photo/2016/01/08/15/03/arduino-1128227_1280.jpg",
    //   description: "Some of my Arduino Projects",
    //   link: "https://github.com/deepesh611/Arduino/",
    //   languages: [<SiCplusplus key='cpp'/>, <SiArduino key='arduino'/>]
    // },
  ];

  const renderProjectCards = (projects) => {
    return projects.map((project, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4 flex justify-center">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="project-card bg-gray-900 bg-opacity-80 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl group relative">
              <div className="relative w-full h-56">
                <img
                    width={400}
                    height={300}
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                />
                <div className="absolute top-2 left-2 flex space-x-2">
                  {project.languages.map((Icon, index) => (
                      <span key={index} className="text-teal-400 text-2xl">{Icon}</span>
                  ))}

                </div>
              </div>
              <div className="p-6">
                <h3 className="project-card-title text-white text-xl font-bold mb-2 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                  {project.title}
                </h3>
                <p className="project-card-description text-white transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        </div>
    ));
  };

  return (
      <div className="container mx-auto px-6 py-12">
        {/*<div className="mb-16">*/}
        {/*  <h2 className="text-3xl font-bold text-center text-white mb-8 relative before:absolute before:content-[''] before:w-12 before:h-1 before:bg-gradient-to-r from-teal-400 to-blue-500 before:left-1/2 before:transform before:-translate-x-1/2 before:bottom-[-10px]">*/}
        {/*    I&apos;m currently working on...*/}
        {/*  </h2>*/}
        {/*  <div className="flex flex-wrap justify-center">*/}
        {/*    {renderProjectCards(currentProjects)}*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div className="w-full border-t border-gray-700 my-16"></div>*/}

        <div>
          {/*<h2 className="text-3xl font-bold text-center text-white mb-8 relative before:absolute before:content-[''] before:w-12 before:h-1 before:bg-gradient-to-r from-teal-400 to-blue-500 before:left-1/2 before:transform before:-translate-x-1/2 before:bottom-[-10px]">*/}
          {/*  Completed Projects*/}
          {/*</h2>*/}
          <div className="flex flex-wrap justify-center">
            {renderProjectCards(completedProjects)}
          </div>
        </div>
      </div>
  );
}
