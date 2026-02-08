import React from "react";
import FaqAccordion from "./FaqAccordian";

function Footer() {
  return (
    <footer className="w-full min-h-screen relative ">
      {/* FAQs Section */}
      <section className="bg-accent p-12 flex">
        <div className="w-full h-fit flex flex-col gap-5">
          <h2>[ FAQs ]</h2>
          <h1 className="text-5xl font-semibold max-w-3xl leading-tight">
            Curious about something?
          </h1>
        </div>

        <div className="">
            <FaqAccordion />
        </div>

      </section>

      {/* <section className="h-[60vh] bg-black rounded-xl w-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-accent text-5xl font-bold uppercase">
            Your Brand Deserves Better.
          </h1>
          <h1 className="text-text text-5xl font-bold uppercase">Let's Build it Right</h1>
        </div>
      </section> */}
    </footer>
  );
}

export default Footer;
