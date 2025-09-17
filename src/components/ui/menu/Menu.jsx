import React, { useState, useEffect } from "react";
import { Plus, Star, ArrowLeft } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Menu = () => {
  const [showAll, setShowAll] = useState(false);

  const products = [
    {
      id: 1,
      title: "Chizburger",
      desc: "200g kotlet + pishloq + sabzavot + sous",
      price: "$2.5",
      img: "https://as1.ftcdn.net/v2/jpg/05/59/22/28/1000_F_559222860_nZtwr23ttV9qN5LBWE0jokBWEavsgTAw.jpg",
    },
    {
      id: 2,
      title: "Cheese Burger",
      desc: "Mozzarella pishloqli burger",
      price: "$3.0",
      img: "https://as1.ftcdn.net/v2/jpg/05/59/22/28/1000_F_559222860_nZtwr23ttV9qN5LBWE0jokBWEavsgTAw.jpg",
    },
    {
      id: 3,
      title: "Veggie Burger",
      desc: "Sabzavotli maxsus burger",
      price: "$2.0",
      img: "https://as1.ftcdn.net/v2/jpg/05/59/22/28/1000_F_559222860_nZtwr23ttV9qN5LBWE0jokBWEavsgTAw.jpg",
    },
    {
      id: 4,
      title: "Chicken Burger",
      desc: "Tovuq go‘shti va maxsus sous bilan",
      price: "$2.8",
      img: "https://as1.ftcdn.net/v2/jpg/05/59/22/28/1000_F_559222860_nZtwr23ttV9qN5LBWE0jokBWEavsgTAw.jpg",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-start p-6 bg-white">
      {/* Chap tomondagi katta rasm */}
      <div className="md:w-1/3 flex justify-center items-center relative mb-6 md:mb-0">
        <img
          src="https://as2.ftcdn.net/v2/jpg/11/75/21/83/1000_F_1175218311_JrX7VOMq85BGxthphTXt0nuBt8vLO3Zs.jpg"
          alt="Big Burger"
          className="w-[380px] h-[380px] object-contain drop-shadow-xl"
          data-aos="fade-right"
        />
        <div className="absolute right-0 top-1/2 bg-green-500 text-white px-3 py-1 rounded-xl font-bold rotate-90">
          MENU
        </div>
      </div>

      {/* O‘ng taraf */}
      <div className="md:w-2/3 bg-green-100 p-6 rounded-3xl shadow-lg relative">
        {/* Back tugmasi (faqat showAll = true bo‘lsa) */}
        {showAll && (
          <button
            onClick={() => setShowAll(false)}
            className=" top-4 left-4 flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        )}

        <div className="grid grid-cols-2 gap-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow p-3 flex flex-col items-center"
              data-aos="zoom-in"
            >
              {/* Faqat kichik rasm (agar showAll = false bo‘lsa) */}
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-contain mb-2"
              />

              {showAll && (
                <>
                  <h3 className="text-base font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 text-center">
                    {item.desc}
                  </p>

                  {/* Reyting */}
                  <div className="flex items-center space-x-1 my-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>

                  {/* Narx va + tugma */}
                  <div className="flex items-center justify-between w-full mt-1">
                    <span className="font-bold text-green-600">
                      {item.price}
                    </span>
                    <button className="p-2 bg-green-500 rounded-full text-white hover:bg-green-600">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* SEE ALL tugmasi */}
        {!showAll && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowAll(true)}
              className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600"
            >
              SEE ALL
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
