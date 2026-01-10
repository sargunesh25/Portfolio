"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

// Path definitions attempting to simulate the icons
// To ensure smoother interpolation, we use roughly similar complexity or accept some cross-fading artifacts.

// Boat: Hull (Trapezoid ish) + Cabin (Rect ish)
// M 20 60 L 80 60 L 70 80 H 30 Z (Hull)
// M 35 60 V 45 H 65 V 60 (Cabin)
// Combined: M 30 75 L 20 60 H 80 L 70 75 H 30 M 35 60 V 45 H 65 V 60
const boatPath = "M 30 75 L 20 60 H 80 L 70 75 H 30 M 35 60 V 45 H 65 V 60";

// Suitcase: Rect Body + Handle
// Body: M 25 75 L 25 45 H 75 L 75 75 H 25 Z
// Handle: M 40 45 V 35 H 60 V 45
// Combined: M 25 75 V 45 H 75 V 75 H 25 M 40 45 V 35 H 60 V 45
const suitcasePath = "M 25 75 V 45 H 75 V 75 H 25 M 40 45 V 35 H 60 V 45";

// Chat: Bubble (Rounded Rect) + Tail
// Bubble: M 25 70 V 35 H 75 V 70 H 40
// Tail: L 25 80 V 70
// Combined: M 25 70 V 35 H 75 V 70 H 40 L 25 85 L 30 70 H 25
// Closest approximation for morph:
// Let's try to match the command count roughly or just let framer handle it.
const chatPath = "M 25 70 V 35 H 75 V 70 H 40 L 25 85 L 30 70 Z M 40 52.5 H 60 M 0 0"; // Added dummy M 0 0 to match command count? No, that breaks it.

// Improved paths for better morphing (simple single paths where possible)
// Boat
const iconPaths = [
    // Boat
    "M 20 55 L 30 75 H 70 L 80 55 H 20 M 35 55 V 40 H 65 V 55",
    // Suitcase
    "M 25 75 V 45 H 75 V 75 H 25 M 40 45 V 38 A 4 4 0 0 1 60 38 V 45",
    // Chat
    "M 25 35 H 75 V 65 H 40 L 25 80 V 65 H 25 V 35"
];

const variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } }
};

export default function Loader({ onComplete }: { onComplete: () => void }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => {
                if (prev === 2) {
                    // End of cycle
                    setTimeout(onComplete, 800); // Wait a bit after last icon before finishing
                    return 0; // consistent loop usually, but for a loader we might want to stop or loop until loaded.
                }
                return prev + 1;
            });
        }, 1200); // Change icon every 1.2s

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
            <div className="relative w-32 h-32 flex items-center justify-center">
                <svg
                    width="80"
                    height="80"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20"
                >
                    <motion.path
                        d={iconPaths[index]}
                        stroke="black"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{ d: iconPaths[index] }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    {/* Dots */}
                    {/* Boat Portholes: 4 dots. Suitcase: 0. Chat: 3 dots */}
                    {/* We can animate these separately */}
                    <AnimatePresence mode='wait'>
                        {index === 0 && ( /* Boat Dots */
                            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <circle cx="35" cy="65" r="2" fill="black" />
                                <circle cx="45" cy="65" r="2" fill="black" />
                                <circle cx="55" cy="65" r="2" fill="black" />
                                <circle cx="65" cy="65" r="2" fill="black" />
                            </motion.g>
                        )}
                        {index === 2 && ( /* Chat Dots */
                            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <circle cx="40" cy="50" r="2" fill="black" />
                                <circle cx="50" cy="50" r="2" fill="black" />
                                <circle cx="60" cy="50" r="2" fill="black" />
                            </motion.g>
                        )}
                    </AnimatePresence>
                </svg>
            </div>
        </motion.div>
    );
}
