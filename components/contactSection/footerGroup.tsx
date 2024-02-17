import { cn } from "@/lib/utils";
import React from "react";
import Magentic from "@/components/ui/magentic";
export function FooterGroup({
  title,
  links,
  isMagnetic = false,
  className,
}: FooterGroupProps) {
  return (
    <div
      className={cn(
        "mask flex grow flex-col items-center justify-center pb-6 text-[clamp(20px,_1vw_+_14px,_24px)] text-[#ffffffbf] md:block md:grow-0 md:py-6",
        className,
      )}
    >
      <h3 className="text-[0.6em]">{title}</h3>
      <ul className=" mt-[0.6em] flex w-full justify-between gap-5  md:mt-[0.1em] md:w-auto md:justify-normal  ">
        {links.map((link, index) => (
          <li key={index} className="">
            {isMagnetic ? (
              <Magentic
                strength={50}
                className="relative text-[0.8em] text-[#ffffffd9]"
                href={link.href}
                hoverUnderline
              >
                <p>{link.text}</p>
              </Magentic>
            ) : (
              <p className="text-[0.8em] text-[#ffffffd9]">{link.text}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface FooterGroupProps {
  title: string;
  links: { href: string; text: string }[];
  isMagnetic?: boolean;
  className?: string;
}
