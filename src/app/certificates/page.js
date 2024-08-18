"use client";

import { AuroraBG } from "@/components/Background";
import { BadgeGrid } from "@/components/Badge Grid";
import { FloatingNavbar } from "@/components/Navbar2";
import { CertificatesGrid } from "@/components/CertificateGrid";
import { ParticipationCertificateGrid } from "@/components/Participation Certificate Grid";

export default function CertificatesPage() {
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

            <section id="participation" className="relative z-[0] flex flex-col items-center pt-16 md:pt-24 w-full min-h-screen px-4">
                <ParticipationCertificateGrid/>
            </section>

            <section id="badges" className="relative z-[0] flex flex-col items-center min-h-screen px-4">
                <BadgeGrid />
            </section>

        </div>
    );
}
