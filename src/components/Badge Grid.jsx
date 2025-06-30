"use client";

const certificatesData = [
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1751297235/linux-unhatched_wart4e.png",
        title: "CISCO - Linux Unhatched",
        date: "June 2025"
    },
    {
        imageUrl:"https://assets.holopin.io/hf2024levels/level1-sloth-hello-coffee-0-0-0.webp",
        title: "Hacktober Fest 2024",
        date: "October 2024",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1725780046/opswat-introduction-to-critical-infrastructure-protection-icip_totete.png",
        title: "OPSWAT Introduction to Critical Infrastructure Protection (ICIP)",
        date: "September 2024",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002406/isc2-candidate_fpevin.png",
        title: "(ISC)2 Member",
        date: "July 2024",
    },
    {
        imageUrl: "https://tryhackme-badges.s3.amazonaws.com/deepesh611.png",
        title: "Try Hack Me Stats"
    },
    {
        imageUrl: "https://api.boot.dev/v1/users/public/3cc33ecc-0bb6-4118-a6a6-b5e4adb2ca8c/thumbnail",
        title: "BOOT.DEV Stats",
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
                            <h3 className="text-xl font-semibold text-gray-300 dark:text-white mb-2">
                                {certificate.title}
                            </h3>
                            <p className="text-gray-300 dark:text-gray-400">{certificate.date}</p>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
};
