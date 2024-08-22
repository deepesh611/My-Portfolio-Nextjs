"use client";
import React from "react";
import Image from "next/image";
import { FlipWords } from "./ui/flip-words";
import { SocialDock } from "@/components/Floating-Dock";


export function Header() {
    const words = ["Python-Programmer","Network-Engineer", "Frontend-Developer", "IoT-Practitioner","Tech-Savvy"];

    return (
        <header className="relative flex items-center justify-center h-screen text-center text-white bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto px-6">
                <img
                    src="https://avatars.githubusercontent.com/u/123585104?v=4"
                    alt="Deepesh Patil"
                    width={200}
                    height={200}
                    className="rounded-full"
                />
                <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight"><br/>
                Deepesh Patil
                </h1>
                <br/>

                <div className="text-lg md:text-xl mb-6">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Hi, I'm a
                    <FlipWords words={words} />
                </div>

                <SocialDock />
            </div>
        </header>
  );
}
