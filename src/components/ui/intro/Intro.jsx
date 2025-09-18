import React from "react";

const Intro = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between">
        {/* Text */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Tasty Food <br />
            <span className="text-green-600">Collections</span>
          </h1>
          <p className="text-gray-600 mt-4 text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
            <button className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md font-semibold hover:bg-green-700 transform hover:-translate-y-1 transition">
              See All
            </button>
            <button className="text-green-600 font-medium hover:underline">
              Menu
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative mt-10 md:mt-0 flex justify-center items-center">
          <img
            src="https://img-api.yumapos.ru/image/crop/original/e8bc4d0a-97d1-5d10-d9ee-c186fef41cc6.png"
            alt="Food"
            className="max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
