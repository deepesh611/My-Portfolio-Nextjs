"use client";

import Image from "next/image";

const certificatesData = [
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1725780046/opswat-introduction-to-critical-infrastructure-protection-icip_totete.png",
        title: "OPSWAT Introduction to Critical Infrastructure Protection (ICIP)",
        date: "September 2024",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002406/isc2-candidate_fpevin.png",
        title: "(ISC)2 Members)",
        date: "July 2024",
    },
];

export const BadgeGrid = () => {
    return (
        <section className="relative z-0 flex flex-col items-center py-16 px-4 min-h-screen">
            <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-12">
                Badges
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {certificatesData.map((certificate, index) => (
                    <div
                        key={index}
                        className="relative bg-transparent bg-opacity-90 rounded-xl backdrop-blur-md shadow-lg p-4 overflow-hidden transition-transform transform hover:scale-105"
                    >
                        <div className="flex justify-center"> {/* Flexbox to center the image */}
                            <img
                                src={certificate.imageUrl}
                                alt={certificate.title}
                                width={200}
                                height={100}
                                className="object-cover mb-4 rounded-lg"
                            />
                        </div>
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
