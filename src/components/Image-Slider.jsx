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