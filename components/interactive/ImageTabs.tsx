"use client";

import { ImageTab } from "@/lib/util/types";
import Image from "next/image";
import { useState } from "react";

export default function ImageTabs({ images }: ImageTabsProps) {
  const [currentTab, setCurrentTab] = useState(0);
  const currentImage = images[currentTab];
  return (
    <div className="flex flex-col items-center justify-start gap-2 p-2">
      {images.length > 1 && (
        <div className="flex flex-row flex-wrap w-full justify-around gap-2 items-center p-1">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentTab(index)}
              className={`flex justify-center grow rounded-md min-w-[7ch] hover:bg-muted/50 cursor-pointer text-muted-foreground hover:text-white ${
                currentTab === index
                  ? "!text-white bg-muted ring-primary ring"
                  : ""
              } p-2`}
            >
              {image.title ?? index + 1}
            </button>
          ))}
        </div>
      )}
      {(currentImage && (
        <Image
          src={currentImage.url}
          alt={currentImage.alt ?? currentImage.title ?? currentImage.url}
          width={128}
          height={128}
          className="w-32 h-32"
        />
      )) || <h1>(No image available)</h1>}
    </div>
  );
}

export interface ImageTabsProps extends React.PropsWithChildren {
  images: ImageTab[];
}
