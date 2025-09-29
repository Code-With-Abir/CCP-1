import React from "react";
import { ReactTyped } from "react-typed";
// import heroimg from '../../public/images/hero.png'
import logo from '../../public/images/CodeWithAbuBokor.png'

const Hero = () => {
  return (
    <div className="w-[94%] mx-auto grid grid-cols-5 p-6 gap-4 rounded-lg bg-white shadow-2xl ">
      <div className="col-span-3 w-full mx-auto">
        <h3 className="text-black text-start ml-10 pb-2">
          <ReactTyped
            className="text-black font-black text-6xl"
            strings={["Web Developer", "WebSite Designer", "Graphic Designer"]}
            typeSpeed={80}
            backSpeed={20}
            attr="placeholder"
            loop
          >
            <input type="text" />
          </ReactTyped>
        </h3>
        <h1 className="text-center font-bold">
          <ReactTyped
            strings={[
              "As a passionate web developer, I thrive on transforming ideas into interactive digital experiences. My workflow blends clean code with intuitive design, ensuring every project is both functional and visually engaging. Whether I'm building responsive layouts with HTML and CSS or crafting dynamic interfaces using React, I prioritize performance, accessibility, and user satisfaction. I believe that great websites aren't just built—they're engineered with purpose, creativity, and precision. Every line of code I write is a step toward creating seamless, impactful web solutions.",
            ]}
            typeSpeed={20}
          />
        </h1>
      </div>
      <div className="w-[100%] mt-10 mb-10 px-5 col-span-2 mx-auto ">
        <img className="object-cover drop-shadow-2xl" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Hero;
