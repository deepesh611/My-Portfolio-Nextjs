"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function ImageSlider() {
  return (
    <div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <div className="flex justify-end mt-4">
  <button className="inline-flex h-8 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-[linear-gradient(110deg,#1e2631,45%,#000103,55%,#1e2631)] hover:text-white">
    View All
  </button>
</div>

    </div>
  );
}

const testimonials = [
  {
    imageUrl: "https://via.placeholder.com/300x200?text=Image+1",
    caption: "Image 1 Description",
  },
  {
    imageUrl: "https://via.placeholder.com/300x200?text=Image+2",
    caption: "Image 2 Description",
  },
  {
    imageUrl: "https://via.placeholder.com/300x200?text=Image+3",
    caption: "Image 3 Description",
  },
  {
    imageUrl: "https://via.placeholder.com/300x200?text=Image+4",
    caption: "Image 4 Description",
  },
];
