"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { FaDownLong } from "react-icons/fa6";
import Link from "next/link";
import React, { useEffect, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
}

export default function Home() {
  const main = useRef<HTMLElement | any>();
  gsap.defaults({ ease: "none" });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Function to check if the device is a mobile
    const checkMobile = () => {
      const mobileViewportWidth = 768; // You can adjust this value based on your needs
      const isMobileDevice = window.innerWidth <= mobileViewportWidth;
      setIsMobile(isMobileDevice);
    };

    // Initial check
    checkMobile();

    // Event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  useGSAP(() => {
    if (isMobile) {
      return;
    }

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
      let elements = document.getElementsByClassName("intro");
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
      //you can add new things by copy pasting the lines   below and changing the text
      tl.to(elements, {
        duration: 2,
        text: " is tragic.",
      })
        .to(elements, {
          duration: 2,
          text: " is common.",
        })
        .to(elements, {
          duration: 2,
          text: " is complex.",
        })
        .to(elements, {
          duration: 2,
          text: " is silent.",
        })
        .to(elements, {
          duration: 2,
          text: " is manageable.",
        })
        .to(elements, {
          duration: 2,
          text: " is addressable.",
        })
        .to(elements, {
          duration: 2,
          text: " is preventable.",
        })
        .to(elements, {
          duration: 2,
          text: " is misunderstood.",
        })
        .to(elements, {
          duration: 2,
          text: " is stigmatized.",
        })
        .to(elements, {
          duration: 2,
          text: " is tragic.",
        });
    },
    { scope: main }
  );

  return (
    <div>
      <section className="section flex-center column">
        <h1>
          Suicide<span className="intro"> is </span>
        </h1>
        <div className="flex-center column">
          <button className="center">
            <div>Scroll to learn more </div>
            <FaDownLong className="center" />
          </button>
          <button>
            <Link href={"/resources"}>Access Resources</Link>
          </button>
        </div>
        <br />
        <br />
        <br />
      </section>

      <div className="section column flex-center facts" ref={main}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="box">
          Suicide is the 11th leading cause of death in the United States.<sup>1</sup>
        </div>
        <br />
        <br />
        <div className="box">
          In 2021, there were an estimated 1.7 million suicide attempts.<sup>1</sup>
        </div>
        <br />
        <br />
        <div className="box">
          On average, there are 132 suicides per day.<sup>1</sup>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      </div>
    </div>
  );
}
