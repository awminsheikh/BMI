import { useState ,useEffect } from "react";
import Bmi from "./Bmi";
import thinMan from "../../assets/img/thinMan.png";
import thinWoman from "../../assets/img/thinWoman.png";
const BmiSection = () => {
  const [gender, setGender] = useState(true); // gender: true => male && gender: false => female
  const genderChange = (value: string) => {
    console.log(value);
    if (value == "male") {
      setGender(true);
    } else if (value == "female") {
      setGender(false);
    }
  };
  return (
    <div className="w-full flex-col-reverse  md:flex-row  flex items-center justify-evenly">
      <div className="w-full md:w-1/2">
        <Bmi
          genderChange={genderChange}
        />
      </div>
      <div className="w-full md:w-1/2 flex-center">
        {gender ? (
          <img className="w-96 animate-moveUp" src={thinMan} alt="" />
        ) : (
          <img className="w-32 animate-moveUp" src={thinWoman} alt="" />
        )}
      </div>
    </div>
  );
};

export default BmiSection;
