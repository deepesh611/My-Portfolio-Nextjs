"use client";

import { useState, useEffect } from "react";
import { AuroraBG } from "@/components/Background";
import { BadgeGrid } from "@/components/Badge Grid";
import { FloatingNavbar } from "@/components/Navbar2";
import { CertificatesGrid } from "@/components/CertificateGrid";
import { CircularBarsSpinnerLoader } from "@/components/Pre-Loader";
import {CoursesCertificates} from "@/components/Courses Certificates";
import { ParticipationCertificateGrid } from "@/components/Participation Certificate Grid";

export default function CertificatesPage() {

    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }, []);
    
        if (loading) {
            return (
                <div className="flex items-center justify-center w-screen h-screen bg-black">
                    <CircularBarsSpinnerLoader />
                </div>
            );
        }

    return (
        <div className="relative flex flex-col items-center min-h-screen scroll-smooth">
            <div className="fixed inset-0 z-[-1] bg-black w-full h-full">
                <AuroraBG />
            </div>

            <FloatingNavbar />

            <section
                className="relative z-[0] flex flex-col items-center pt-16 md:pt-24 w-full min-h-screen px-4">
                <CertificatesGrid />
            </section>

            <section id="courses" className="relative flex flex-col items-center pt-16 md:pt-24 w-full">
                <CoursesCertificates />
            </section>

            <section id="participation" className="relative z-[0] flex flex-col items-center pt-16 md:pt-24 w-full min-h-screen px-4">
                <ParticipationCertificateGrid/>
            </section>

            <section id="badges" className="relative z-[0] flex flex-col items-center min-h-screen px-4">
                <BadgeGrid />
            </section>

        </div>
    );
}
