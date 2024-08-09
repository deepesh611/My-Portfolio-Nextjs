export function Projects() {
    const currentProjects = [
      {
        title: "IoT Network Security",
        image: "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
        description: "A project focused on enhancing IoT network security using machine learning.",
        link: "https://github.com/yourusername/IoT-Network-Security"
      },
      {
        title: "AI-Based Cybersecurity",
        image: "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg",
        description: "Developing AI models to predict and prevent cyber threats.",
        link: "https://github.com/yourusername/AI-Based-Cybersecurity"
      }
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
            <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <img src={project.image} alt={project.title} className="rounded-lg"/>
              <h3 className="project-card-title text-white p-4 text-xl font-bold">{project.title}</h3>
              <p className="project-card-description text-white p-4">{project.description}</p>
            </div>
          </a>
        </div>
      ));
    };
  
    return (
      <div className="container mx-auto px-6 py-12 bg-transparent">  
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8 relative before:absolute before:content-[''] before:w-12 before:h-1 before:bg-gradient-to-r from-teal-400 to-blue-500 before:left-1/2 before:transform before:-translate-x-1/2 before:bottom-[-10px]">
            I'm currently working on...
          </h2>
          <div className="flex flex-wrap justify-center -m-4">
            {renderProjectCards(currentProjects)}
          </div>
        </div>
  
        {/* Divider */}
        <div className="w-full border-t border-gray-700 my-16"></div>
  
        <div>
          {/* Completed Projects Section */}
          <h2 className="text-3xl font-bold text-center text-white mb-8 relative before:absolute before:content-[''] before:w-12 before:h-1 before:bg-gradient-to-r from-teal-400 to-blue-500 before:left-1/2 before:transform before:-translate-x-1/2 before:bottom-[-10px]">
            Completed Projects
          </h2>
          <div className="flex flex-wrap justify-center -m-4">
            {renderProjectCards(completedProjects)}
          </div>
        </div>
      </div>
    );
  }
  