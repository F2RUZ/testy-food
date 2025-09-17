import React from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/ui/intro/Intro";
import Menu from "./components/ui/menu/Menu";
import Customer from "./components/ui/customer/Customer";
import Now from "./components/ui/now/Now";
import About from "./components/ui/about/About";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Menu />
      <Customer />
      <Now />
      <About />
      <Footer />
    </div>
  );
};

export default App;
