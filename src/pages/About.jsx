import React from "react";
import "../assets/About.css";

const About = () => {
  return (
    <div className="w-[94%] mx-auto grid grid-cols-1 md:grid-cols-3 about-container p-6 mt-3 gap-6 rounded-lg bg-white shadow-sm">
      {/* Card 1 */}
      <div
        className="flex flex-col items-center justify-between text-center animate-wave about-card wave"
        style={{ animationDelay: "0s" }}
      >
        <h1 className="font-black text-3xl">Complete Project</h1>
        <div className="border-b-2 border-black w-[80%] mx-auto pt-3"></div>
        <h1 className="mt-3 text-5xl font-black">200+</h1>
      </div>

      <div
        className="flex flex-col items-center justify-between text-center animate-wave about-card wave"
        style={{ animationDelay: "0.2s" }}
      >
        <h1 className="font-black text-3xl">Happy Client</h1>
        <div className="border-b-2 border-black w-[80%] mx-auto pt-3"></div>
        <h1 className="mt-3 text-5xl font-black">199+</h1>
      </div>

      <div
        className="flex flex-col items-center justify-between text-center animate-wave about-card wave"
        style={{ animationDelay: "0.4s" }}
      >
        <h1 className="font-black text-3xl">Active Order</h1>
        <div className="border-b-2 border-black w-[80%] mx-auto pt-3"></div>
        <h1 className="mt-3 text-5xl font-black">15+</h1>
      </div>
    </div>
  );
};

export default About;
