"use client";

import React, { use, useEffect, useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Download from "./_components/Download";
import Intro from "./_components/Intro";
import SearchBar from "./_searchbar/SearchBar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useMouseStore } from "@/app/store/mouse";

const Mainpage = () => {
  const [tryNow, setTryNow] = useState(true);

  const {
    mousePosition,
    setMousePosition,
    cursorVariant,
    setCursorVariant,
    cursorText,
    setCursorText,
  } = useMouseStore();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });

    return () => {
      window.removeEventListener("mousemove", (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
  }, []);

  const variants = {
    default: { x: mousePosition.x - 16, y: mousePosition.y - 16 },
    text: {
      backgroundColor: "#f87116",
      mixBlendMode: "difference",
      x: mousePosition.x - 100,
      y: mousePosition.y - 100,
      height: 200,
      width: 200,
    },
    search: {
      opacity: 1,
      backgroundColor: "#ffffff",
      color: "#fff",
      height: 80,
      width: 80,
      fontSize: "18px",
      border: "4px white solid",
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
  };

  return (
    <>
      <MaxWidthWrapper
        classname="mb-12 mt-28 sm:mt-40 flex flex-col
       cursor-default items-center justify-center text-center"
      >
        <Intro />
        <motion.div
          className="bg-black h-[32px] w-[32px] flex justify-center items-center
                rounded-[50%] fixed top-0 left-0 pointer-events-none z-20"
          variants={variants as any}
          animate={cursorVariant}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <span className={"font-aber text-center text-orange-500"}>
            {cursorText}
          </span>
        </motion.div>
      </MaxWidthWrapper>
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className=" pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-500 to-orange-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
      <MaxWidthWrapper>
        {!tryNow && <SearchBar />}
        {tryNow && (
          <div
            className="w-full h-fit flex flex-col justify-center items-center"
            onClick={() => {
              setTryNow(!tryNow);
              setCursorText("");
              setCursorVariant("default");
            }}
            onMouseEnter={() => {
              setCursorText("Try Now");
              setCursorVariant("search");
            }}
            onMouseLeave={() => {
              setCursorText("");
              setCursorVariant("default");
            }}
          >
            <video
              autoPlay
              loop
              muted
              className="w-[60%] h-22 bg-transparent flex items-center justify-center mt-[-10px]"
            >
              <source src="/video.mp4" />
            </video>
          </div>
        )}
        <div className="w-full flex justify-center mt-10">
          <Button onClick={() => setTryNow(!tryNow)}>Click here to try</Button>
        </div>

        <Download />
      </MaxWidthWrapper>
    </>
  );
};

export default Mainpage;
