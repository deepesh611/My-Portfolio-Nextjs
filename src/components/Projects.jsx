export function Projects() {
  const currentProjects = [
    {
      title: "Raspberry Pi-3 Cluster",
      image: "https://dinofizzotti.com/blog/2020-04-10-raspberry-pi-cluster-part-1-provisioning-with-ansible-and-temperature-monitoring-using-prometheus-and-grafana/IMG_3105.JPEG",
      description: "A network of Raspberry Pi-3 devices working together to perform parallel processing tasks.",
      link: "https://github.com/deepesh611/RaspBerry-Pi-Cluster"
    },
    {
      title: "OmniLangDB",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*94n7Yjm2xml9dVFbTph0hA.jpeg",
      description: "An all-in-one documentation solution for connecting databases in various languages.",
      link: "https://github.com/deepesh611/OmniLangDB"
    },
    {
      title: "Raspberry-Pi NAS",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*4IvpGb15N5zMg51Q",
      description: "An easy-to-carry NAS (Network Attached Storage) with a Raspberry-Pi 3",
      link: "https://github.com/deepesh611/Raspberry-Pi-NAS"
    },
  ];

  const completedProjects = [
    {
      title: "Personal Portfolio",
      image: "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
      description: "A modern, responsive portfolio website using React and Tailwind CSS.",
      link: "https://github.com/yourusername/Personal-Portfolio"
    },
    {
      title: "Home Automation System",
      image: "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
      description: "Built a smart home system using Raspberry Pi and Python.",
      link: "https://github.com/yourusername/Home-Automation-System"
    }
  ];

  const renderProjectCards = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4 flex justify-center">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <div className="project-card bg-gray-900 bg-opacity-80 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative w-full h-56">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="project-card-title text-white text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="project-card-description text-gray-300">
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
      {/* Current Projects Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-white mb-8 relative before:absolute before:content-[''] before:w-12 before:h-1 before:bg-gradient-to-r from-teal-400 to-blue-500 before:left-1/2 before:transform before:-translate-x-1/2 before:bottom-[-10px]">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm currently working on...
        </h2>
        <div className="flex flex-wrap justify-center">
          {renderProjectCards(currentProjects)}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-700 my-16"></div>

      {/* Completed Projects Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-white mb-8 relative before:absolute before:content-[''] before:w-12 before:h-1 before:bg-gradient-to-r from-teal-400 to-blue-500 before:left-1/2 before:transform before:-translate-x-1/2 before:bottom-[-10px]">
          Completed Projects
        </h2>
        <div className="flex flex-wrap justify-center">
          {renderProjectCards(completedProjects)}
        </div>
      </div>
    </div>
  );
}
