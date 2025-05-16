"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1,
  interval = 2000, // milliseconds
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  interval?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animateLoop = async () => {
      // Fade in
      await animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration,
          delay: stagger(0.15),
        }
      );

      // Wait before fading out
      timeout = setTimeout(async () => {
        // Fade out
        await animate(
          "span",
          {
            opacity: 0,
            filter: filter ? "blur(10px)" : "none",
          },
          {
            duration: 0.5,
            delay: stagger(0.1),
          }
        );

        // Restart animation
        animateLoop(); // Call the loop again
      }, interval);
    };

    animateLoop();

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [words, filter, duration, interval, animate]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className={`opacity-0 ${
                  idx > 3
                    ? "text-purple-300"
                    : "dark:text-white text-black"
                }`}
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};