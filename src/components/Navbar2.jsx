"use client";
import React, { useEffect, useState } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
    IconHome,
    IconUser,
    IconCertificate,
    IconBook2,
    IconFolderCode,
    IconTrophy, IconMedal, IconCertificate2, IconFileCertificate,
} from "@tabler/icons-react";

export function FloatingNavbar() {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Participations",
            link: "#participation",
            icon: <IconFileCertificate className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Badges",
            link: "#badges",
            icon: <IconMedal className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
    ];

    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-opacity-70 p-4">
            <FloatingNav navItems={navItems} activeSection={activeSection} />
        </div>
    );
}
