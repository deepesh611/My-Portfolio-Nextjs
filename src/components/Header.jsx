"use client";
import React from "react";
import { FlipWords } from "./ui/flip-words";

export function Header() {
    const words = ["Python-Programmer","Network-Admin", "Frontend-Developer", "Arduino-Expert","Tech-Savvy"];

    return (
        <header className="relative flex items-center justify-center h-screen text-center text-white bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto px-6">
                <img
                src="https://avatars.githubusercontent.com/u/123585104?v=4" 
                alt="Profile Picture"
                className="w-60 h-60 rounded-full border-2 border-white mb-8 shadow-lg"
                />
                <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
                Deepesh Patil
                </h1>
                <br/>
                <div className="text-lg md:text-xl mb-6">
                Hi, I'm a
                <FlipWords words={words} />
                </div>
            </div>
        </header>
  );
}
