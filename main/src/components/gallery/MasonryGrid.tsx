"use client";

import Masonry from "react-masonry-css";
import { Flex, Text, Media } from "@once-ui-system/core";
import styles from "./Gallery.module.scss";
import type { GalleryImage } from "@/utils/googleDrive";

type MasonryGridProps = {
  images: GalleryImage[];
};

export default function MasonryGrid({ images }: MasonryGridProps) {
  const breakpointColumnsObj = {
    default: 2,
    720: 1,
  };

  if (images.length === 0) {
    return (
      <Flex fillWidth paddingY="64" horizontal="center" vertical="center">
        <Text onBackground="neutral-weak" variant="body-default-m">
          No images found. Check your Drive folder link and API key.
        </Text>
      </Flex>
    );
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {images.map((image, index) => (
        <Media
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, 50vw"
          key={index}
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
          src={image.src}
          alt={image.alt}
          className={styles.gridItem}
        />
      ))}
    </Masonry>
  );
}
