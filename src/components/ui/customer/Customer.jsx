import React, { useState } from "react";
import burgerImg from "../../../assets/img/CusImg.png";

export default function Customer() {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      name: "Abdur Rahman",
      role: "Customer",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.",
      price: "10.00$",
      rating: 5,
    },
    {
      name: "Ali Karimov",
      role: "Customer",
      review:
        "Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus.",
      price: "12.50$",
      rating: 4,
    },
  ];

  const current = reviews[index];

  const next = () => setIndex((index + 1) % reviews.length);
  const prev = () => setIndex((index - 1 + reviews.length) % reviews.length);

  return (
    <div className="bg-gradient-to-br from-white to-gray-50">
      <section className="max-w-[1920px] mx-auto w-full flex flex-col md:flex-row items-center justify-between px-8 lg:px-24 py-20">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Customer Review
          </h2>
          <p className="text-gray-600 leading-relaxed">{current.review}</p>

          <div className="flex items-center gap-4">
            <img
              src={`https://i.pravatar.cc/100?u=${current.name}`}
              alt={current.name}
              className="w-12 h-12 rounded-full object-cover shadow-md"
            />
            <div>
              <h4 className="text-green-600 font-semibold">{current.name}</h4>
              <p className="text-sm text-gray-500">{current.role}</p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 active:scale-90 transition"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 active:scale-90 transition"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative md:w-1/2 mt-10 md:mt-0">
          <img
            src={burgerImg}
            alt="Burger"
            className="w-full h-80 object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
          />
          <div className="absolute -bottom-10 left-6 bg-white rounded-xl shadow-xl p-6 w-[80%] hover:shadow-2xl transition">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-900">Order now</h3>
              <span className="text-gray-700 font-medium">{current.price}</span>
            </div>
            <div className="flex gap-1 mb-3">
              {Array(current.rating)
                .fill("★")
                .map((star, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    {star}
                  </span>
                ))}
            </div>
            <p className="text-sm text-gray-600">{current.review}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
