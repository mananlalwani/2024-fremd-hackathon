"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
}

export default function Home() {
  const main = useRef<HTMLElement | any>();
  gsap.defaults({ ease: "none" });
  useGSAP(() => {
    const boxes = gsap.utils.toArray(".box") as HTMLElement[];
    boxes.forEach((box: HTMLElement) => {
      gsap.set(box, { x: -200 });
      gsap.to(box, {
        x: 200,
        scrollTrigger: {
          trigger: box,
          start: "top center",
          end: "bottom center",
          scrub: true,
          //this is for debugging purposes
          // markers: true,
        },
      });
    });
  }),
    { scope: main };
  useGSAP(
    () => {
      let elements = document.querySelectorAll("h1 span");
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      //you can add new things by copy pasting the lines below and changing the text
      tl.to(elements, {
        duration: 2,
        text: " is common.",
      }).to(elements, {
        duration: 2,
        text: " is addressable.",
      }).to(elements, {
        duration: 2,
        text: " is preventable.",
      });
    },
    { scope: main }
  );

  return (
    <div>
      <section className="section flex-center column">
        <h1>
          Suicide<span className="hi"> is </span>
        </h1>
      </section>
      <br />
      <br />
      {/* Put a downward arrow here */}

      <br />
      <br />
      <br />
      <div className="section flex-center column" ref={main}>
        <div className="box">Stat here</div>
        <br />
        <br />
        <br />
        <br />
        <div className="box">Stat here</div>
        <br />
        <br />
        <br />
        <br />
        <div className="box">Stat here</div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="section flex-center column">
        <h1 className="blue">Suicide is addressable.</h1>
      </section>
    </div>
  );
}
