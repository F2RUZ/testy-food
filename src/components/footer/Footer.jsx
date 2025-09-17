import React from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-50 relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/05/59/22/28/360_F_559222860_nZtwr23ttV9qN5LBWE0jokBWEavsgTAw.jpg')" }}>
      {/* Subscribe Box */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-full max-w-[1000px]">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left text */}
          <div>
            <h3 className="text-xl font-bold text-green-500">
              Subscribe <br /> To Our Newsletter
            </h3>
          </div>
          {/* Input + Button */}
          <div className="flex flex-1 max-w-[500px]">
            <input
              type="email"
              placeholder="Enter your mail"
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 outline-none"
            />
            <button className="bg-green-500 text-white px-6 rounded-r-lg hover:bg-green-600">
              Subscribe now
            </button>
          </div>
          {/* Social Icons */}
          <div className="flex gap-3 text-green-500">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="pt-40 pb-10 px-6 bg-black/60">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-200">
              <li className="hover:text-green-400 cursor-pointer">› Home</li>
              <li className="hover:text-green-400 cursor-pointer">› About us</li>
              <li className="hover:text-green-400 cursor-pointer">› Contact us</li>
              <li className="hover:text-green-400 cursor-pointer">› Blog</li>
              <li className="hover:text-green-400 cursor-pointer">› Team</li>
              <li className="hover:text-green-400 cursor-pointer">› Our Menu</li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact us</h4>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-400" /> 3rd Floor, Office 45
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400" /> 00965 - 96659986
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-400" /> M.Alyaqout@4house.Co
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-400" /> Sun - Sat / 10:00 AM - 8:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
