"use client";

import React, { use, useEffect, useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Download from "./_components/Download";
import Intro from "./_components/Intro";
import SearchBar from "./_searchbar/SearchBar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
// import { useMouseStore } from "@/app/store/mouse";
import { SparklesCore } from "@/components/ui/sparkles";
import SearchBarAuto from "./_searchbar/SearchBarAuto";
import useStore from "../store/store";
import { simulateWordInput, simulateQueryInput } from "../utils/keypress";

const Mainpage = () => {
  const {
    autoplay,
    setAutoplay,
    setMatchedWebsite,
    setSearchQuery,
    setTabPressed,
    setWebsiteName,
    inputRef,
  } = useStore();
  const resetData = () => {
    // setAutoplay(false);
    setMatchedWebsite(null);
    setSearchQuery("");
    setTabPressed(false);
    setWebsiteName("");
  };

  const simulateFunction = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay before starting simulation
    await simulateWordInput(inputRef, "Youtube");
    await simulateQueryInput(inputRef, "Rick Roll");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    resetData();
    await simulateWordInput(inputRef, "Google");
    await simulateQueryInput(inputRef, "What is the weather today?");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    resetData();
    await simulateWordInput(inputRef, "Netflix");
    await simulateQueryInput(inputRef, "Stranger Things");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    resetData();
    await simulateWordInput(inputRef, "Spotify");
    await simulateQueryInput(inputRef, "Best of 2021");
  };

  return (
    <>
      <MaxWidthWrapper
        classname="mb-12 mt-28 sm:mt-40 flex flex-col 
       cursor-default items-center justify-center text-center"
      >
        <Intro />
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
      <MaxWidthWrapper classname="">
        <div className="relative">
          <div className="w-full h-fit flex items-center justify-center absolute top-[0] left-0 z-[-1]">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-[60%] h-[100px]"
              particleColor="#fff"
            />
          </div>
          {!autoplay && <SearchBar />}
          {autoplay && <SearchBarAuto />}
        </div>

        <div className="w-full flex justify-center mt-10">
          <Button
            onClick={() => {
              setAutoplay(!autoplay);
              if (autoplay) {
                resetData();
              }
              if (!autoplay) {
                simulateFunction();
              }
            }}
          >
            {autoplay ? "Try Now" : "See Demo"}
          </Button>
        </div>

        <Download />
      </MaxWidthWrapper>
    </>
  );
};

export default Mainpage;
