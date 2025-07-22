import { Skill } from "@/Data";
import React from "react";
import { Button } from "./ui/movingBorder";
// Removed unused iconLists array. Use card.iconLists from workExperience data.

const Skills = () => {
  return (
    <div className="py-20" id={"skills"}>
      <h1 className="heading text-3xl md:text-4xl lg:text-5xl text-center font-bold">
        A small section of my <span className="text-purple-400">skills</span>
      </h1>
      <div className="w-full mt-12 grid z-10 lg:grid-cols-4 grid-cols-1 gap-10">
        {Skill.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className=" items-center justify-between mt-7 mb-3 z-10">
              <div className="lg:ms-5 mb-8">
                <h1 className="test-start text-xl mb-8 md:text-3xl font-bold">
                  {card.title}
                </h1>
                <p className="md:text-start md:pl-8 md:pr-8 pl-4 pr-4 text-sm md:text-lg text-white-100 mt-3 text-center font-semibold ">
                  {card.desc}
                </p>
              </div>
              <div className="flex items-center lg:ml-25 md:ml-50 ml-15 ">
                {card.iconLists?.map((icon, index) => (
                  <div
                    key={icon}
                    className="border border-white/[0.2] rounded-full bg-black md:w-18 md:h-18 lg:w-20 lg:h-20 w-15 h-15 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${6 * index * 1}px)`,
                    }}
                  >
                    <img src={icon} alt={icon} className="p-2 md:w-18 md:h-18 lg:w-20 lg:h-20 w-15 h-15 overflow-hidden rounded-full left-[50%]" />
                  </div>
                ))}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
