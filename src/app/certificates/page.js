"use client";

import { AuroraBG } from "@/components/Background"; // Adjust the import if necessary
import { FloatingNavbar } from "@/components/Navbar2"; // Assuming you create this component
import { ImageSlider } from "@/components/Image-Slider"; // Reusing your ImageSlider component

export default function CertificatesPage() {
    return (
        <div className="relative flex flex-col items-center min-h-screen scroll-smooth">
            <div className="fixed inset-0 z-[-1] bg-black w-full h-full">
                <AuroraBG />
            </div>

            <FloatingNavbar />

            <section className="relative z-[0] flex flex-col items-center pt-16 md:pt-24 w-full min-h-screen px-4">
                <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-12">
                    My Certificates
                </h1>
            </section>
        </div>
    );
}
