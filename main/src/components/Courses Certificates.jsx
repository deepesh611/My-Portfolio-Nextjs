"use client";

import Image from "next/image";
import { data } from "autoprefixer";

const certificatesData = [
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1753093795/bootdev_certificate_ecs8ht.png",
        title: "BootDotDev Kubernetes Course Certificate",
        date: "July 2025"
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1752921857/bootdev_certificate_docker_bljn63.png",
        title: "BootDotDev Docker Course Certificate",
        date: "July 2025"
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1751299019/CISCO_-_Linux_Unhactched-1_owk2ne.png",
        title: "CISCO - Linux Unhatched",
        date: "June 2025"
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1751299020/bootdev_certificate_1_uzd205.png",
        title: "BootDotDev Linux Course Certificate",
        date: "June 2025"
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1749218024/n8n_course_completion-1_ahx9t5.jpg",
        title: "n8n Course Completion",
        date: "June 2025",
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1725778724/introduction_to_cip_oqlvie.png",
        title: "Introduction to CIP",
        date: "September 2024",
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
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1736082518/ISC2_Network_Security-1_xs9hil.jpg",
        title: "ISC2-Network Security",
        date: "January 2025"
    },
    {
        imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1736082518/ISC2_Security_Operations-1_g2bix7.jpg",
        title: "ISC2-Security Operations",
        date: "January 2025"
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
