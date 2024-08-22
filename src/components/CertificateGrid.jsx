"use client";

import Image from "next/image";

const certificatesData = [
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002362/PVPIT_certf.-1_majjxy.jpg",
        title: "Finalists in a National-Level Hackathon",
        date: "February 2024",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002278/Artificial_Intelligence_with_Python-Internship-1_nkjdqm.jpg",
        title: "Artificial Intelligence with Python - Internship",
        date: "August 2023",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002313/Hacktopia_GNI_Hydrabad-1_lzrjkh.jpg",
        title: "Certificate of Talent in a National-Level Hackathon",
        date: "August 2023",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724001886/STAI-1_piell3.jpg",
        title: "Best Performer in STAI Competition",
        date: "January 2019",
    },
];

export const CertificatesGrid = () => {
    return (
        <section className="relative z-0 flex flex-col items-center py-16 px-4 min-h-screen">
            <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-12">
                My Certificates
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
