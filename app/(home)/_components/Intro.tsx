"use client";

import React, { useEffect } from "react";
import { RoughNotation } from "react-rough-notation";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
// import { useMouseStore } from "@/app/store/mouse";
const Intro = () => {
  const { toast } = useToast();
  // const { setCursorVariant } = useMouseStore();

  useEffect(() => {
    console.log("toast");
    toast({
      variant: "destructive",
      className:
        "top-0 right-0 flex fixed md:max-w-[420px] md:top-16 md:right-4 hidden sm:flex ",
      title: "Welcome to Quick Surf!👋",
      description: "Application still under development.🚀",
      action: <ToastAction altText="Close the toast">Close</ToastAction>,
    });
  }, [toast]);

  return (
    <>
      {/* <Badge text="🎉 Introduing Quick Surf!" /> */}

      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-white" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          Introducing Quick Surf!
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>

      <h1 className="text-white max-w-4xl text-5xl font-anthroSemibold md:text-6xl mt-5">
        Discover the Web Faster with{" "}
        <span
          className="text-orange-500/20
           font-anthroSemiboldItalic"
        >
          <RoughNotation type="highlight" show animate customElement="span">
            <span className="text-orange-500">Quick Surf</span>
          </RoughNotation>
        </span>
      </h1>
      <p className="mt-5 font-semibold max-w-prose text-zinc-400 sm:text-lg font-anthroBook">
        Introducing Quick Surf – your gateway to instant browsing. With our
        innovative search bar, simply type the website name, press tab, enter
        your query, and watch as the page opens in a flash.
      </p>
    </>
  );
};

export default Intro;
