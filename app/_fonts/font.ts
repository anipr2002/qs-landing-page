import exp from "constants";
import localFont from "next/font/local";

//add multiple fonts of the same family with different weights called Anthro

export const anthro = localFont({
    variable: "--font-anthro",
    src: "./AnthroTrial-Regular.woff",
    });

export const anthroBold = localFont({
    variable: "--font-anthro-bold",
    src: "./AnthroTrial-Bold.woff",
    });

export const anthroSemibold = localFont({
    variable: "--font-anthro-semibold",
    src: "./AnthroTrial-Semi-Bold.woff",
    });

export const anthroBook = localFont({
    variable: "--font-anthro-book",
    src: "./AnthroTrial-Book.woff",
    });

export const anthroItalic = localFont({
    variable: "--font-anthro-italic",
    src: "./AnthroTrial-MediumItalic.woff",
    });

export const anthroSemiboldItalic = localFont({
    variable: "--font-anthro-semibold-italic",
    src: "./AnthroTrial-Semi-BoldItalic.woff",
    });

export const aber = localFont({
    variable: "--font-aber",
    src: "./Aber-Mono-Regular.woff",
    });