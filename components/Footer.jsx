import React from "react";

function Footer() {
  return (
    <footer className="w-full h-[60vh] p-2">
      <section className="bg-black rounded-xl w-full h-full  flex flex-col items-center justify-center">
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
