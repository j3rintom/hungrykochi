import React from "react";

export const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img src={slide.urls} alt="" className="slide-image" />
          <h2 className="slide-title">&quot; {slide.title} &quot;</h2>
          <h3 className="slide-text">- {slide.description}</h3>
        </div>
      ))}
    </section>
  );
};
