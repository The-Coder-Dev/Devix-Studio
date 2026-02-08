import React from "react";
import FaqAccordion from "./FaqAccordian";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full min-h-screen relative ">
      {/* FAQs Section */}
      <section className="bg-[#F4F4F4] p-12">
        <div className="w-full h-fit flex flex-col gap-5">
          <h2>[ FAQs ]</h2>
          <h1 className="text-5xl font-semibold max-w-3xl leading-tight">
            Curious about something?
          </h1>
        </div>

        <div className="flex">
          <div className="w-300 h-fit bg-[#FAFAFA]">
            <Image src="/profile.jpg" width={40} height={40} />
            <h2>Short on Time?</h2>
            <p>
              Your project deserves strategy that actually works. Let’s start
              with a conversation.
            </p>

            <Link href="/" className="group bg-black text-text px-3 py-2">
              <div className="group overflow-hidden relative transition-all ease-in-out duration-300">
                <div
                  className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-4"
                  href="/"
                >
                  <h1>Contact Me</h1>
                </div>

                <div
                  className="absolute top-4 block transition-transform duration-300 ease-in-out group-hover:-translate-y-4"
                  href="/"
                >
                  <h1>Contact Me</h1>
                </div>
              </div>
            </Link>

          </div>
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
