"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "./CountUp";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const hero = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const about = useTransform(scrollYProgress, [0, 1], ["0%", "-1%"]);

  return (
    <section className="min-h-screen w-full relative" ref={ref}>
      {/* Hero Section Start */}

      <motion.section
        style={{ y: hero }}
        className='w-full h-screen z-10  bg-[url("/hero.webp")] bg-position-[67%_center] sm:bg-center bg-cover'
      >
        <div className="w-full h-full flex items-end p-12">
          <h1 className="text-6xl uppercase max-w-4xl text-white font-bold mix-blend-difference">
            We build brands, designs, and digital experience
          </h1>
        </div>
      </motion.section>

      {/* Hero Section End */}



      {/* About Section START */}
      <motion.section
        style={{ y: about }}
        className="bg-secondary p-12 z-20 min-h-screen w-full flex flex-col gap-10 "
      >
        <div className="flex flex-col gap-10">
          <h4 className="text-white">[ Who I am ]</h4>
          <p className="text-2xl lg:text-5xl md:text-3xl indent-30 text-white font-medium leading-tight font-[Manrope]">
            We're a creative agency helping ambitious brands go from “good
            enough” to unforgettable. Our work blends strategy, design, and
            technology to deliver results that actually move the needle.
          </p>
        </div>

        <div className="w-full h-150 sm:h-fit flex flex-col gap-2 sm:gap-40 sm:flex sm:flex-row">
          <div className="flex flex-col items-center sm:items-start justify-center w-full sm:w-fit h-full">
            <div className="flex gap-2">
              <CountUp className="text-7xl text-white font-bold" from={0} to={50} startWhen="true" />
              <span className="text-7xl text-white font-bold">+</span>
            </div>
            <p className="text-white uppercase">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center sm:items-start justify-center sm:w-fit  w-full h-full">
            <div className="flex gap-2">
              <CountUp className="text-7xl text-white font-bold" from={0} to={4} startWhen="true" />
              <span className="text-7xl text-white font-bold">+</span>
            </div>
            <p className="text-white uppercase">Years Experience</p>
          </div>
          <div className="flex flex-col items-center sm:items-start justify-center  sm:w-fit w-full h-full">
            <div className="flex gap-2">
              <CountUp className="text-7xl text-white font-bold" from={0} to={98} startWhen="true" />
              <span className="text-7xl text-white font-bold">%</span>
            </div>
            <p className="text-white uppercase">Client Satisfied</p>
          </div>
        </div>
      </motion.section>

      {/* About Section END */}
    </section>
  );
}

export default Hero;
