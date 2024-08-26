import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandInstagram,
} from "@tabler/icons-react";


export function SocialDock() {
    const links = [
        {
            title: "GitHub",
            icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://deepesh611.vercel.app/",
        },
        {
            title: "LinkedIn",
            icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://www.linkedin.com/in/deepesh-patil-103a87258/",
        },
        {
            title: "Instagram",
            icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://www.instagram.com/_deepesh_v.p/",
        },
    ];
    return (
        <div className="flex items-center justify-center w-full">
            <FloatingDock
                items={links}
            />
        </div>
    );
}
