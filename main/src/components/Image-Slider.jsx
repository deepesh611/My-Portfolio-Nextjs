"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Link from "next/link";

export function ImageSlider() {
  const certificates = [
      {
          imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1755217767/AWS_Cloud_Quest-Cloud_Practitioner-1_dfnxib.png",
          caption: "AWS Cloud Quest: Cloud Practitioner"
      },
    {
      imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1754586148/AWS_Cloud_Practitioner_Essentials-1_cgmemm.jpg",
      caption: "AWS Cloud Practitioner Essentials",
    },
    {
      imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002278/Artificial_Intelligence_with_Python-Internship-1_nkjdqm.jpg",
      caption: "Internship from Coincent",
    },
    {
      imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002313/Hacktopia_GNI_Hydrabad-1_lzrjkh.jpg",
      caption: "Certificate of Talent",
    },
    {
      imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1724002345/Mastercard_job_simulation-1_qvlbre.jpg",
      caption: "Completed Job Simulation",
    },
    {
      imageUrl: "https://res.cloudinary.com/dgiiz2en1/image/upload/v1727789436/DEEPESH_PATIL-1_rsaxxm.png",
      caption: "Top Contributor in Open Source (VSoC) ",
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center overflow-x-hidden">
        <div className="w-full max-w-screen-xl">
          <InfiniteMovingCards
            items={certificates}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link href="/certificates">
          <button className="animate-shimmer inline-flex h-10 items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-[linear-gradient(110deg,#1e2631,45%,#000103,55%,#1e2631)] hover:text-white">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}
