import React from "react";
import phoneA from "../../../assets/img/Social-Media-Food-Banner-Mockup-1.jpg";
import phoneB from "../../../assets/img/Social-Media-Food-Banner-Mockup-PSD-3.jpg";
import burgerLeft from "../../../assets/img/05-burger-diner-branding-mockup-1170x780.jpg";
import burgerRight from "../../../assets/img/Wrapped-Burger-Mockup-feature-image.jpg";

/**
 * Now.jsx
 * Modern landing section for Fast Food app.
 * Place this file in src/components/Now.jsx
 *
 * Expects these assets in src/assets/img/:
 * - Social-Media-Food-Banner-Mockup-1.jpg
 * - Social-Media-Food-Banner-Mockup-PSD-3.jpg
 * - 05-burger-diner-branding-mockup-1170x780.jpg
 * - Wrapped-Burger-Mockup-feature-image.jpg
 *
 * TailwindCSS bo'lishi kerak (configured in the project).
 */

/* Small presentational sub-component: colored badge */
const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-red-400 to-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
    <svg
      className="w-3 h-3"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M12 2L15 8H9L12 2Z" fill="white" />
    </svg>
    {children}
  </span>
);

/* Feature item used in list */
const FeatureItem = ({ title, subtitle, accent = "red" }) => {
  const accentClass =
    accent === "red"
      ? "bg-red-100 text-red-600"
      : accent === "yellow"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-green-100 text-green-600";

  return (
    <div className="flex gap-4 items-start">
      <div
        className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg ${accentClass} shadow-sm`}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M12 2C8.13 2 5 5.13 5 9C5 14 12 22 12 22C12 22 19 14 19 9C19 5.13 15.87 2 12 2Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-gray-500 mt-0.5">{subtitle}</div>
      </div>
    </div>
  );
};

/* Phone stack - layered mockups for visual depth */
const PhoneStack = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -left-6 -top-6 transform rotate-6 opacity-90">
        <img
          src={phoneB}
          alt="phone mockup back"
          className="w-40 sm:w-56 md:w-64 lg:w-72 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform"
        />
      </div>

      <div className="relative z-10">
        <img
          src={phoneA}
          alt="phone mockup front"
          className="w-44 sm:w-64 md:w-72 lg:w-84 rounded-3xl shadow-3xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500"
        />
      </div>

      <div className="absolute -right-8 top-16 hidden sm:block">
        <div className="w-20 h-20 rounded-full bg-white/40 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-md">
          <div className="text-xs font-bold text-white">APP</div>
        </div>
      </div>
    </div>
  );
};

const Now = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background accent strip */}
      <div className="absolute inset-x-0 -top-36 pointer-events-none">
        <svg
          className="w-full h-40 sm:h-56 lg:h-72"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <path
            fill="url(#g1)"
            fillOpacity="0.15"
            d="M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,213.3C672,203,768,149,864,122.7C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left column: visual (phones & badges) */}
          <div className="md:col-span-6 flex flex-col items-center md:items-start">
            <div className="w-full max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <Badge>New • Mobile App</Badge>
                <div className="text-xs text-gray-400 font-medium">v2.1</div>
              </div>

              <div className="bg-gradient-to-r from-green-200 to-green-400 rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  {/* Phone stack inside a subtle rounded card */}
                  <div className="flex-1">
                    <PhoneStack />
                  </div>

                  <div className="hidden sm:flex flex-col gap-2 pl-4">
                    <div className="text-sm font-bold">Fast ordering</div>
                    <div className="text-xs text-gray-700">
                      Select, pay and track — all in the app.
                    </div>
                    <div className="mt-3 flex gap-2">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-3 py-2 bg-black text-white rounded-lg text-xs font-semibold shadow hover:scale-105 transform transition"
                        aria-label="App Store"
                      >
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 11C16 13.209 14.209 15 12 15C9.791 15 8 13.209 8 11C8 8.791 9.791 7 12 7C14.209 7 16 8.791 16 11Z"
                            fill="white"
                          />
                        </svg>
                        <span>App Store</span>
                      </a>

                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-black text-black rounded-lg text-xs font-semibold shadow hover:scale-105 transform transition"
                        aria-label="Google Play"
                      >
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 5V19L12 12L3 5Z" fill="currentColor" />
                        </svg>
                        <span>Google Play</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* small features under the card */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <FeatureItem
                  title="Quick Checkout"
                  subtitle="Save your card for 1-click orders."
                  accent="red"
                />
                <FeatureItem
                  title="Live Tracking"
                  subtitle="See delivery in real time."
                  accent="green"
                />
                <FeatureItem
                  title="Exclusive Deals"
                  subtitle="App-only discounts every week."
                  accent="yellow"
                />
                <FeatureItem
                  title="Favorites"
                  subtitle="Save your go-to meals."
                  accent="red"
                />
              </div>
            </div>
          </div>

          {/* Right column: headline + CTA */}
          <div className="md:col-span-6">
            <div className="pl-0 md:pl-12 lg:pl-20">
              <h3 className="text-sm text-orange-500 font-semibold mb-3">
                Delicious in your pocket
              </h3>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
                Now With Your Favorite
                <br />
                Mobile Application In
                <span className="relative inline-block">
                  <span className="px-2 -skew-x-6 inline-block bg-gradient-to-r from-lime-400 to-green-400 text-white rounded-md">
                    Your Pocket
                  </span>
                </span>
              </h2>

              <p className="text-gray-600 max-w-xl mb-6">
                Order from top menus, get exclusive offers, and track your
                delivery live — all in one beautiful app. Fast ordering, easy
                payments, and tasty rewards.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-400 text-white rounded-full font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Get the App
                </a>

                <a
                  href="#menu"
                  className="text-sm text-gray-700 underline underline-offset-4"
                >
                  Or explore the menu
                </a>
              </div>

              {/* Statistics row */}
              <div className="mt-8 bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex items-center gap-4">
                  <div className="text-2xl font-extrabold text-gray-900">
                    4.9
                  </div>
                  <div className="text-xs text-gray-500">
                    App rating (5k+ reviews)
                  </div>
                </div>

                <div className="flex-1 flex items-center gap-4">
                  <div className="text-2xl font-extrabold text-gray-900">
                    +50k
                  </div>
                  <div className="text-xs text-gray-500">
                    Downloads this month
                  </div>
                </div>

                <div className="flex-1 flex items-center gap-4">
                  <div className="text-2xl font-extrabold text-gray-900">
                    1hr
                  </div>
                  <div className="text-xs text-gray-500">Avg delivery time</div>
                </div>
              </div>

              {/* logos or small icons strip */}
              <div className="mt-6 flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" fill="#F97316" />
                  </svg>
                  <div className="text-xs text-gray-700">Fast Delivery</div>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="4"
                      fill="#F59E0B"
                    />
                  </svg>
                  <div className="text-xs text-gray-700">Secure Payments</div>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12h18" stroke="#10B981" strokeWidth="2" />
                  </svg>
                  <div className="text-xs text-gray-700">24/7 Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative burger images on the sides */}
        <div className="pointer-events-none">
          <img
            src={burgerLeft}
            alt="burger left"
            className="hidden lg:block absolute left-4 bottom-6 w-40 opacity-95 rounded-2xl transform hover:scale-105 transition-transform"
          />
          <img
            src={burgerRight}
            alt="burger right"
            className="hidden lg:block absolute right-4 bottom-6 w-40 opacity-95 rounded-2xl transform hover:-translate-y-1 transition-transform"
          />
        </div>

        {/* Bottom wave separator */}
        <div className="mt-12">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-24"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0,48L48,58.7C96,69,192,91,288,96C384,101,480,91,576,80C672,69,768,59,864,56C960,53,1056,59,1152,69.3C1248,80,1344,96,1392,104L1440,112L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </div>

      {/* Floating CTA circle on larger devices */}
      <div className="hidden lg:flex fixed right-12 bottom-12 z-50">
        <a
          href="#"
          className="w-20 h-20 rounded-full bg-gradient-to-tr from-red-500 to-yellow-400 flex items-center justify-center shadow-2xl transform hover:scale-105 transition"
          aria-label="Quick order"
        >
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 3h18v4H3zM3 11h18v10H3z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Now;
