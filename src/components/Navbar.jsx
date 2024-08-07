"use client";
import React, { useEffect, useState } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconCertificate, IconBook2, IconFolderBolt, IconFolderCancel, IconFolderCheck, IconFolderCode } from "@tabler/icons-react";

export function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconFolderCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Certificates",
      link: "#certificates",
      icon: <IconCertificate className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Education",
      link: "#education",
      icon: <IconBook2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    }
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
