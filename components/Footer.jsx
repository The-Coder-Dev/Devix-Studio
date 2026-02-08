import React from "react";

function Footer() {
  return (
    <footer className="w-full min-h-screen relative ">
      <section className="h-[60vh] bg-black rounded-xl w-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-accent text-5xl font-bold uppercase">
            Your Brand Deserves Better.
          </h1>
          <h1 className="text-text text-5xl font-bold uppercase">Let's Build it Right</h1>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
