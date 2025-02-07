import React from "react";
import { SiTryhackme } from "react-icons/si";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandInstagram,
    IconBrandLeetcode,
} from "@tabler/icons-react";

export function SocialDock() {
    const links = [
        {
            title: "GitHub",
            icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://github.com/deepesh611",
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
        {
            title: "Leetcode",
            icon: <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://leetcode.com/u/nerdygamer611/",
        },
        {
            title: "TryHackMe",
            icon: <SiTryhackme className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://tryhackme.com/p/deepesh611",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center w-full space-y-4">

        <a href="https://drive.google.com/file/d/1jBSAcvr8TmOGFrRShOJYlr1SRl2e_2-7/view" target="_blank">
            <button
                className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span
                    className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"/>
              </span>
                <div
                    className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>
                  Get My Resume
                </span>
                    <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.75 8.75L14.25 12L10.75 15.25"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                        />
                    </svg>
                </div>
                <span
                    className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"/>
            </button></a>

            <FloatingDock items={links} />
        </div>
    );
}