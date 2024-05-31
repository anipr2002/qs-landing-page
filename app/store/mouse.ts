import { create } from "zustand";

interface MouseStore {
    mousePosition: { x: number; y: number };
    setMousePosition: ({x, y}: {x: number, y: number}) => void;
    cursorVariant: "default" | "text" | "search";
    setCursorVariant: (variant: MouseStore["cursorVariant"]) => void;
    cursorText: string;
    setCursorText: (text: string) => void;
}

export const useMouseStore = create<MouseStore>((set) => ({
    mousePosition: { x: 0, y: 0 },
    setMousePosition: ({ x, y }: { x: number, y: number }) => set({ mousePosition: { x, y } }),
    cursorVariant: "default",
    setCursorVariant: (variant: MouseStore["cursorVariant"]) => set({ cursorVariant: variant }),
    cursorText: "",
    setCursorText: (text: string) => set({ cursorText: text }),
}));
