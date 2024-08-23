import React, { useState, useEffect } from "react";

import thinMan from "../../assets/img/thinMan.png";
import thinWoman from "../../assets/img/thinWoman.png";
import fatMan from "../../assets/img/fatMan.png";
import fatWoman from "../../assets/img/fatWoman.png";

import bellPepper from "../../assets/img/bellPepper.png";
import lettuce from "../../assets/img/lettuce.png";
import whiteCarot from "../../assets/img/whiteCarot.png";

interface Props {
  genderChange: (value: string) => void;
}

const Bmi: React.FC<Props> = ({ genderChange }: Props) => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [gender, setGender] = useState<string>("male");
  const [bmi, setBmi] = useState<number | null>(null);
  const [calculatedBMI, setCalculatedBMI] = useState<number | undefined>(
    undefined
  );
  const [result, setResult] = useState<string>("");
  const [isBmiCalculated, setIsBmiCalculated] = useState(false);

  const maleBMICalculation = (weight: number, height: number): number => {
    return parseFloat((weight / ((height / 100) * (height / 100))).toFixed(2));
  };

  const femaleBMICalculation = (weight: number, height: number): number => {
    return parseFloat(
      (weight / ((height / 100) * (height / 100)) - 1).toFixed(2)
    );
  };

  const handleCalculateBMI = () => {
    if (gender === "male") {
      setCalculatedBMI(maleBMICalculation(weight, height));
    } else if (gender === "female") {
      setCalculatedBMI(femaleBMICalculation(weight, height));
    }
    setIsBmiCalculated(true);
  };
  useEffect(() => {
    if (calculatedBMI !== undefined && isBmiCalculated) {
      if (calculatedBMI < 18.5) {
        setResult("Thin");
      } else if (18.5 <= calculatedBMI && calculatedBMI < 24.9) {
        setResult("Normal");
      } else if (24.9 <= calculatedBMI && calculatedBMI <= 29.9) {
        setResult("Overweight");
      } else if (calculatedBMI > 30) {
        setResult("Obese");
      }

      if (
        !isNaN(calculatedBMI) &&
        isFinite(calculatedBMI) &&
        calculatedBMI > 1
      ) {
        setBmi(calculatedBMI);
      } else {
        setBmi(null);
        if (isBmiCalculated) {
          alert(
            "Error: Please enter valid weight and height values to calculate BMI."
          );
        }
      }
    }
  }, [calculatedBMI, isBmiCalculated]);
  return (
    <div className="w-full flex-center-col relative">
      <div className="w-full flex-center">
        <div className=" bg-green-50 p-10 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Calculate BMI</h2>
          <label className="block mb-4">
            Gender:
            <select
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
                genderChange(e.target.value);
              }}
              className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label className="block mb-4">
            Weight (kg):
            <input
              type="number"
              min={0}
              value={weight}
              onChange={(e) => setWeight(parseInt(e.target.value))}
              className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block mb-4">
            Height (cm):
            <input
              type="number"
              min={0}
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value))}
              className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </label>
          <button
            className="block w-full px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none"
            onClick={handleCalculateBMI}
          >
            Calculate BMI
          </button>
        </div>
        <div className="w-full md:w-1/2 flex-center-col">
          <div className="w-full flex-center-col">
            {gender == "male" ? (
              calculatedBMI && calculatedBMI > 30 ? (
                <img
                  src={fatMan}
                  className="w-96 animate-moveUp transition-all"
                />
              ) : (
                <img
                  src={thinMan}
                  className="w-96 animate-moveUp transition-all"
                  alt=""
                />
              )
            ) : calculatedBMI && calculatedBMI > 30 ? (
              <img
                src={fatWoman}
                className="w-32 animate-moveUp transition-all"
              />
            ) : (
              <img
                src={thinWoman}
                className=" w-32 animate-moveUp transition-all"
                alt=""
              />
            )}
          </div>
          {calculatedBMI && (
            <div className="p-3 animate-moveUp flex-center rounded-lg">
              {bmi !== null &&
                (calculatedBMI < 30 ? (
                  <p className="bg-green-500 p-3 rounded-lg w-full h-full text-xl font-semibold text-center flex flex-col">
                    <span>YourBMI is: {bmi} </span>
                    <span> Result: {result}</span>
                  </p>
                ) : (
                  <p className="bg-red-700 p-3 rounded-lg w-full h-full text-xl font-semibold text-center flex flex-col">
                    <span>YourBMI is: {bmi} </span>
                    <span> Result: {result}</span>
                  </p>
                ))}
            </div>
          )}
        </div>
      </div>
      <div>
        <img
          src={bellPepper}
          className="absolute w-32 blur-sm  animate-element right-20 top-10"
          alt=""
        />
        <img
          src={lettuce}
          className="absolute w-28 blur-sm  animate-element right-20 -bottom-28"
          alt=""
        />
        <img
          src={whiteCarot}
          className="absolute w-28 blur-sm  animate-element left-1  top-40"
          alt=""
        />
      </div>
    </div>
  );
};

export default Bmi;
