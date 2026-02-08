"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Links = [
  { title: "Home", url: "/", id: 1 },
  { title: "Projects", url: "/", id: 2 },
  { title: "Services", url: "/", id: 3 },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full p-4  px-5 absolute top-0 z-999 ">
      <nav className="w-full h-fit bg-black/70 backdrop-blur-md sm:backdrop-blur-none px-3 py-2 sm:bg-transparent flex items-center justify-between relative">
        <div className="uppercase text-white sm:text-black text-2xl font-bold">
          <Link href="/">Devix</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="flex sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </div>

        {/* Desktop Menu Bar Fixed */}
        <div className="hidden sm:flex items-center w-fit gap-3 p-2 pl-4 h-fit uppercase text-sm bg-black/70 backdrop-blur-md text-white">
          {Links.map((item) => {
            return (
              <div
                className="group overflow-hidden relative transition-all ease-in-out duration-300"
                key={item.id}
              >
                <Link
                  className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-4"
                  href={item.url}
                >
                  {item.title}
                </Link>

                <Link
                  className="absolute top-4 block transition-transform duration-300 ease-in-out group-hover:-translate-y-4"
                  href={item.url}
                >
                  {item.title}
                </Link>
              </div>
            );
          })}

          <Link href="/" className="group bg-white text-black px-3 py-2">
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
      </nav>

      {/* Mobile Menu Navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween" }}
            exit={{ opacity: 0, y: -80 }}
            className="sm:hidden bg-black/70 backdrop-blur-md text-white  p-6 flex flex-col gap-4"
          >
            {Links.map((item) => {
              return (
                <div
                  className="group overflow-hidden uppercase relative transition-all ease-in-out duration-300"
                  key={item.id}
                >
                  <Link
                    className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-5"
                    href={item.url}
                  >
                    {item.title}
                  </Link>

                  <Link
                    className="absolute top-5 block transition-transform duration-300 ease-in-out group-hover:-translate-y-5"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
