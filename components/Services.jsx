import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="bg-[#F4F4F4] w-full min-h-screen p-12 flex flex-col gap-10">
      <div className="w-full h-fit flex flex-col gap-5">
        <h2>[ Services ]</h2>
        <h1 className="text-5xl font-semibold max-w-3xl leading-tight">
          <span className="text-accent">Not just services - we deliver</span>{" "}
          growth, clarity, <span className="text-accent">and</span> real impact.
        </h1>
      </div>

      <div className="w-full h-full flex flex-col gap-6">
        <ServiceCard
          cardNo={"01"}
          ServiceTitle={"Website Development"}
          ServiceDescription={
            "User-centric, responsive websites designed for smooth navigation, compelling visuals, and optimized conversion."
          }
        />
        <ServiceCard
          cardNo={"02"}
          ServiceTitle={"Graphic Design"}
          ServiceDescription={
            "User-centric, responsive websites designed for smooth navigation, compelling visuals, and optimized conversion."
          }
        />
        <ServiceCard
          cardNo={"03"}
          ServiceTitle={"WordPress Developement"}
          ServiceDescription={
            "User-centric, responsive websites designed for smooth navigation, compelling visuals, and optimized conversion."
          }
        />
        <ServiceCard
          cardNo={"04"}
          ServiceTitle={"Social Media Creatives"}
          ServiceDescription={
            "User-centric, responsive websites designed for smooth navigation, compelling visuals, and optimized conversion."
          }
        />
      </div>
    </section>
  );
}

export default Services;
