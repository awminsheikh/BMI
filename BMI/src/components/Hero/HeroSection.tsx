import saladDash from "../../assets/img/saladDash.png";
import avocado from "../../assets/img/avocado.png";
import apple from "../../assets/img/apple.png";

import colorFullCarot from '../../assets/img/colorFullCarot.png'


const HeroSection = () => {
  return (
    <div className="w-full h-full flex-between">
      <div className="w-1/2 flex-center">
        <span className="mx-4 text-white font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, soluta
          porro incidunt esse natus praesentium quas numquam amet et ipsam
          reiciendis eveniet? Dicta cupiditate assumenda itaque ut vero, beatae
          veritatis?
        </span>
      </div>
      <div className="w-1/2 flex-center">
        <img src={saladDash} alt="" className="w-96 animate-element " />
      </div>
      <div className="absolute top-20 animate-moveUp blur-sm">
        <img src={avocado} className="w-28" alt="" />
      </div>
      <div className="absolute bottom-20 rotate-12 animate-element right-10 blur-sm">
        <img src={apple} className="w-28" alt="" />
      </div>
      <div className="absolute w-32 bottom-20 left-10 animate-element blur-sm ">
        <img src={colorFullCarot} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
