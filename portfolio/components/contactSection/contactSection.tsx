import { Footer } from "@/components/contactSection/footer";
import React, { useRef } from "react";
import Magentic from "@/components/ui/magentic";
import { BgImagesContainer } from "@/components/contactSection/bgImagesContainer";
import { useAppSelector } from "@/hooks/reduxHooks";
import { Header } from "../header";
import { Bulge } from "../bulge";
export function ContactSection({}) {
  const { suscribe } = useAppSelector((state) => state.fullpageReducer.fourth);
  const bgImagesSharedRef = useRef<gsap.core.Tween | null>(null);

  return (
    <section className="section section__5 fourth lightGradient ">
      <Bulge type="Dark" />
      <Header color="Dark"></Header>

      <Magentic // href="mailto:email.coex@gmail.com"
        className="footer__heading anime cursor-pointer"
        onMouseEnter={() => {
          bgImagesSharedRef.current?.restart(true);
        }}
        onMouseLeave={() => {
          bgImagesSharedRef.current?.reverse();
        }}
      >
        <span className="shapka mask">
          Say
          <br />
          Hello<span className="yellow__it">.</span>
        </span>
      </Magentic>
      <BgImagesContainer bgImagesSharedRef={bgImagesSharedRef} />
      <Footer />
    </section>
  );
}
