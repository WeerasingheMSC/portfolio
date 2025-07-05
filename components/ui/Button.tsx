import React from 'react'

const Button = ({
    title, icon, position,handleClick,otherClasses}
    :{
    title: string;
    icon?: React.ReactNode;
    position?: string;
    handleClick?: () => void;
    otherClasses?: string;}
) => {
  return (
    <div>
  <button className="p-[3px] relative md:w-60 md:mt-10 gap-2 w-full overflow-hidden rounded-lg">
    {/* Animated gradient border */}
    <div className="absolute inset-0 rounded-lg animated-gradient-border" />
    {/* Button content */}
    <div className={`relative px-7 py-2 inline-flex cursor-pointer md:px-13 gap-2 rounded-[6px] group transition duration-200 text-white hover:bg-transparent ${otherClasses}`}>
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </div>
  </button>
</div>

  )
}

export default Button
