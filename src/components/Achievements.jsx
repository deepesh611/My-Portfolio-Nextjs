"use client";

import React from "react";
import { motion } from "framer-motion";

export function Achievements() {
    const achievements = [
        {
            title: "Vice-President of Robotics Community",
            description:
                "Led the robotics community of my college for more than a year, organizing sessions, workshops and competitions.",
            date: "January 2023 - Present",
            icon: "🤖",
        },
        {
            title: "Top Performer in Hackathons",
            description:
                "Recognized as a top performer in multiple national-level hackathons among 300+ teams.",
            date: "March 2023 - May 2024",
            icon: "🏆",
        },
        {
            title: "Open Source Contributions",
            description:
                "Contributed to several open-source projects in VSoC (Vinyasa Summer of Code).",
            date: "July 2024",
            icon: "💻",
        },
        {
            title: "IoT Development",
            description:
                "Developed and implemented projects using Arduino Uno, Arduino Mega, Raspberry Pi-3, and Jetson Nano, integrating various sensors for real-world applications.",
            date: "Ongoing",
            icon: "🔧",
        },
    ];


    return (
        <section className="container mx-auto px-6 py-12">
            <div className="flex flex-wrap justify-center gap-8">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        className="w-full md:w-1/2 lg:w-1/3 p-4 flex justify-center"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-300 border-opacity-30 rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="flex items-center mb-4">
                                <span className="text-3xl mr-4">{achievement.icon}</span>
                                <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                            </div>
                            <p className="text-gray-300 mb-4">{achievement.description}</p>
                            <p className="text-gray-500">{achievement.date}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
