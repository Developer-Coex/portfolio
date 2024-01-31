import { getRandRgb } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type BgImageProps = {
  total: number;
  item: {
    id: number;
    imgLink: string;
    title: string;
    subtitle: string;
  };
  i: number;
};

export function BgImage({ total, item, i }: BgImageProps) {
  return (
    <div
      style={{
        backgroundColor: "black",
        zIndex: `${
          Math.floor(total / 2) == i ? 520 : Math.floor(Math.random() * 10)
        }`,
      }}
      className="bgImages drop-shadow-smd absolute h-[272px] w-[272px] origin-[center_center] translate-x-[-50%] translate-y-[0%] overflow-hidden rounded-3xl md:h-[400px] md:w-[400px]"
    >
      <Image
        src={item.imgLink}
        fill={true}
        alt=""
        className="h-full w-full object-cover !opacity-80"
      />
    </div>
  );
}
