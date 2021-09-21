import React from "react";

export const Dots = ({ activeIndex, onclick, imageSlider }) => {
  return (
    <div className="all-dots">
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot dot-active" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
};
