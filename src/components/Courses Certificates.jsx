"use client";

import Image from "next/image";

const certificatesData = [
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1725778724/introduction_to_cip_oqlvie.png",
        title: "Introduction to CIP",
        date: "September 2024",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002345/Mastercard_job_simulation-1_qvlbre.jpg",
        title: "Mastercard-Cybersecurity Job Simulation",
        date: "July 2024",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724215625/ISC2_Security_Policies_Completency-1_eh2axm.jpg",
        title: "ISC2-Security Principles",
        date: "July 2024"
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724215625/ISC2_Incidence_Response-1_ncowfe.jpg",
        title: "ISC2-Incident Response & Disaster Recovery",
        date: "July 2024"
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724215625/ISC2_Access_Control_Concepts-1_gbvtgh.jpg",
        title: "ISC2-Access Control Concepts",
        date: "July 2024"
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724215625/Artificial_Intelligence_with_Python-Training-1_azsd88.jpg",
        title: "Artificial Intelligence with Python",
        date: "July 2023"
    },
];

export const CoursesCertificates = () => {
    return (
        <section className="relative z-0 flex flex-col items-center py-16 px-4 min-h-screen">
            <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-12">
                Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {certificatesData.map((certificate, index) => (
                    <div
                        key={index}
                        className="relative bg-transparent bg-opacity-90 rounded-xl backdrop-blur-md shadow-lg p-4 overflow-hidden transition-transform transform hover:scale-110"
                    >
                        <img
                            src={certificate.imageUrl}
                            alt={certificate.title}
                            width={400}
                            height={300}
                            className="object-cover w-full h-70 mb-4 rounded-lg"
                        />
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {certificate.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">{certificate.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
