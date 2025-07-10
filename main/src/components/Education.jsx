export function Timeline() {
  const events = [
    { 
      year: "May 2026",
      title: "Indian Institute of Information Technology Pune", 
      description: "Bachelor's in Computer Science & Engineering."
    },
    {
      year: "October 2024",
      title: "Vinyasa Summer of Code",
      description: "Top 10 Contributor (Ranked 9th) – Vinyasa Summer of Code (VSoC)"
    },
    {
      year: "July 2024",
      title: "Mastercard",
      description: "Successfully completed the Cybersecurity Job Simulation by Mastercard"
    },
    {
      year: "August 2023",
      title: "Coincent Internship",
      description: "Completed an internship program on 'Artificial Intelligence with Python'"
    },
    {
      year: "August 2023",
      title: "Coincent Training Program",
      description: "Completed 'Artificial Intelligence with Python' training program."
    },
    { 
      year: "2022", 
      title: "Indian School Muscat", 
      description: "CBSE curriculum with a focus on Science, specializing in Computer Science." 
    },
  ];

  return (
    <div className="relative container mx-auto px-6 py-10 pb-20">
      <div className="absolute w-1 bg-teal-500 h-full left-1/2 transform -translate-x-1/2"></div>

      <ul className="relative space-y-12">
        {events.map((event, index) => (
          <li
            key={index}
            className={`relative flex items-center justify-between ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"} fade-in`}
          >
            <div className="w-1/2 flex justify-center">
              <div className={`bg-black bg-opacity-30 backdrop-blur-lg border border-white/10 text-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 ease-in-out hover:scale-105`}>
                <h3 className="text-xl font-bold">{event.year}</h3>
                <h4 className="text-lg font-semibold mt-2">{event.title}</h4>
                <p className="mt-1 text-sm">{event.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-teal-500 border-4 border-gray-800"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
