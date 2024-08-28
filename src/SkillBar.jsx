import React, { useEffect, useRef } from "react";
import "./SkillBar.css";

const SkillBar = ({ skill, percentage, color }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (bar) {
      bar.style.width = `${percentage}%`;
      bar.style.backgroundColor = color;
      bar.style.setProperty("--width", `${percentage}%`);
    }
  }, [percentage, color]);

  return (
    <div className="w-full overflow-hidden">
      <div className="py-2 text-lg font-medium flex justify-between">
        <span>{skill}</span>
      </div>
      <div className="w-full h-1 bg-gray-300 relative">
        <div
          ref={barRef}
          className="h-full skill-bar-animation"
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
