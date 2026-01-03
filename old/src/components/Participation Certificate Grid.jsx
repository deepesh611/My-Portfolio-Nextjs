"use client";

const certificatesData = [
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1738132819/Graphs_Camp_bn7gil.png",
        title: "Graph Theory Programming Camp - AlgoUniversity",
        date: "January 2025"
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724782769/Flipkart_Grid_6.0_InfoSec_qvtlsj.jpg",
        title: "Flipkart Grid 6.0-Information Security",
        date: "August 2024"
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724782958/Flipkart_Grid_6.0_Software_Dev_duhdmu.jpg",
        title: "Flipkart Grid 6.0-Information Security",
        date: "August 2024"
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002679/Deepesh_Patil_certificate_IIT_Jammu-1_b4ao3d.jpg",
        title: "IIT Jammu CTF Contest",
        date: "June 2024",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002691/Optigo_Inter-IIIT_Coding-1_oqayuc.jpg",
        title: "Inter-IIIT Coding Contest",
        date: "April 2024",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002685/Flipkart_Grid_5.0_Participation-1_n3tz2v.jpg",
        title: "Flipkart Grid 5.0",
        date: "August 2023",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002683/Deepesh_May_2023_participation_43426-1_k08xvm.jpg",
        title: "AI with Python Course",
        date: "May 2023",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002671/Certificate_of_Participation_Reverse_Coding_Deepesh_Patil-1_zzq0x3.jpg",
        title: "IIIT Pune Coding Contest",
        date: "April 2023",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002682/Deepesh_Patil_TopTalks_Ideathon2k22_Participation-1_ytv4b8.jpg",
        title: "TopTalks Ideathon",
        date: "November 2022",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002689/MUN_2019-1_vkgyr0.jpg",
        title: "MUN - Indian School Muscat",
        date: "August 2019",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002687/MUN_2018-1_uxobhr.jpg",
        title: "MUN - Indian School Muscat",
        date: "August 2018",
    },
];

export const ParticipationCertificateGrid = () => {
    return (
        <section className="relative z-0 flex flex-col items-center py-16 px-4 min-h-screen">
            <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-12">
                Participation Certificates
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {certificatesData.map((certificate, index) => (
                    <div
                        key={index}
                        className="relative bg-transparent bg-opacity-90 rounded-xl backdrop-blur-md shadow-lg p-4 overflow-hidden transition-transform transform hover:scale-105"
                    >
                        <img
                            src={certificate.imageUrl}
                            alt={certificate.title}
                            width={400}
                            height={300}
                            className="object-cover w-full h-70 mb-4 rounded-lg"
                        />
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
