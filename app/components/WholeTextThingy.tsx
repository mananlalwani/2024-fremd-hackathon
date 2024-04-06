'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  gsap.registerPlugin(TextPlugin, useGSAP);
}

export default function Home() {
  const main = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box') as HTMLElement[];
      boxes.forEach((box: HTMLElement) => {
        gsap.set(box, { x: -200 });
        gsap.to(box, {
          x: 200,
          scrollTrigger: {
            trigger: box,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            //this is for debugging purposes
            // markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <div>
      <section className="section flex-center column">
        <h1>Suicide is common</h1>
      </section>
      <div className="section flex-center column" ref={main}>
        <div className="box">Stat here</div>
        <br />
        <br />
        <br />
        <div className="box">Stat here</div>
        <br />
        <br />
        <br />
        <div className="box">Stat here</div>
      </div>
      <section className="section"></section>
    </div>
  );
}
