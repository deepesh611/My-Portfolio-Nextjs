"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function ImageSlider() {
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
        <button className="animate-shimmer inline-flex h-10 items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-[linear-gradient(110deg,#1e2631,45%,#000103,55%,#1e2631)] hover:text-white">
          View All
        </button>
      </div>
    </div>
  );
}

const certificates = [
  {
    imageUrl: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fHww",
    caption: "Certificate 1",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww",
    caption: "Certificate 2",
  },
  // Add more certificates here
];
