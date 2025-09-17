import React from "react";
import LeftBurger from "../../../assets/img/about-left-burger.png";
import RightBurger from "../../../assets/img/about-right-burger.png";
import AboutBck from "../../../assets/img/about-bck.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-10 lg:px-0 py-20"
    >
      <div
        className="absolute -top-12 left-6 w-20 h-20 md:w-28 md:h-28 rotate-[-10deg] hidden md:block"
        aria-hidden="true"
      >
        <img
          src={LeftBurger}
          alt="burger decoration"
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>

      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          About Us
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          At <span className="font-semibold text-green-600">Tasty Food</span>,
          we bring you fresh ingredients, delicious meals, and cozy vibes. Our
          mission is simple: serve food that makes you feel at home, but with a
          modern twist. Join us and experience a journey of taste that connects
          people, culture, and tradition.
        </p>
      </div>

      <div className="relative flex justify-center md:justify-end">
        <div className="rounded-2xl overflow-hidden shadow-2xl max-w-[600px] w-full">
          <img
            src={AboutBck}
            alt="Restaurant interior"
            className="w-full h-auto object-cover"
          />
        </div>

        <div
          className="absolute -right-8 -bottom-8 md:-right-14 md:-bottom-14 w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center shadow-xl"
          aria-hidden="true"
        >
          <img
            src={RightBurger}
            alt="burger accent"
            className="w-20 md:w-28 h-auto translate-y-1"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
