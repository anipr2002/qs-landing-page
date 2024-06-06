import React, { useState } from "react";
import { FaApple, FaLinux, FaWindows } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Confetti } from "@/components/magicui/confetti";
const Download = () => {
  const { toast } = useToast();

  type OS = "WINDOWS" | "MAC" | "LINUX";

  const [selected, setSelected] = useState<OS>("WINDOWS");

  const handleClick = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      Confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      Confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center mt-10">
      <div className="flex flex-col rounded-xl  w-fit h-fit bg-zinc-300">
        <div className="flex text-white font-aber text-2xl items-center justify-center">
          <a
            className="py-5 px-9 bg-orange-500 hover:bg-orange-300 transition ease-in rounded-tl-xl"
            href="/Quick-surf_0.0.1_x64-setup.exe"
            download
            onClick={() => {
              toast({
                variant: "default",
                // className:
                // "top-0 right-0 flex fixed md:max-w-[420px] md:top-16 md:right-4 hidden sm:flex ",
                title: "Download Started 🚀",
                description: "Quick Surf is downloading in the background.",
                action: (
                  <ToastAction altText="Close the toast">Close</ToastAction>
                ),
              });
              handleClick();
            }}
          >
            DOWNLOAD
          </a>
          {/* <div className="bg-orange-500 py-5 w-fit"> | </div> */}
          <div className="py-5 px-6 bg-orange-500 hover:bg-orange-300 transition ease-in rounded-tr-xl">
            {/* <DropdownMenu>
              <DropdownMenuTrigger>
                <span className="flex items-center">
                  {selected} <DoubleArrowDownIcon />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="bottom" className="w-32">
                <DropdownMenuLabel>Select OS</DropdownMenuLabel>
                <DropdownMenuItem
                  onSelect={() => setSelected("WINDOWS")}
                  className="flex items-center"
                >
                  <FaWindows className="mr-2" />
                  WINDOWS
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setSelected("MAC")}
                  className="flex items-center"
                >
                  <FaApple className="mr-2" />
                  MAC
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setSelected("LINUX")}
                  className="flex items-center"
                >
                  <FaLinux className="mr-2" />
                  LINUX
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu> */}
            WINDOWS
          </div>
        </div>

        <div className="flex w-full space-x-4 justify-center items-center font-aber py-4 text-gray-600/85">
          <div className="text-nowrap flex w-fit justify-center mt-2">
            OPEN BETA 0.0.1{" "}
          </div>
          <div className="w-fit flex ">
            {/* <FaApple className="" /> */}
            <FaWindows className="mx-2" />
            {/* <FaLinux className="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
