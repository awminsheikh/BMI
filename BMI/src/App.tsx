import { useState } from "react";
import Bmi from "./components/Bmi/Bmi";
import Contact from "./components/Footer/Contact";
import HeroSection from "./components/Hero/HeroSection";
import Nav from "./components/Hero/Nav";
import Footer from "./components/Footer/Footer";
const App = () => {
  const [gender, setGender] = useState(true); // gender: true => male && gender: false => female
  const genderChange = (value: string) => {
    console.log(value);
    if (value == "male") {
      setGender(true);
    } else if (value == "female") {
      setGender(false);
    }
    console.log(gender);
  };
  return (
    <div className="flex-center-col bg-green-800 w-full">
      <div className="h-screen w-full flex-center-col">
        <Nav />
        <HeroSection />
      </div>
      <div className="w-full h-full">
        <Bmi genderChange={genderChange} />
      </div>
      <div className="w-full h-screen">
        <Contact />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default App;
