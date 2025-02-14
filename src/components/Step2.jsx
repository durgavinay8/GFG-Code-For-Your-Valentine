/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Step2 = ({ nextStep }) => {
  useEffect(() => {
    console.log("step2 rendered");
    const timer = setTimeout(() => {
      console.log("Step2 finished, moving to Step3");
      nextStep();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center">
      <h1 className={"text-4xl font-bold z-10"}>
        To make you fall in love with the glimpse of us!!!✨
      </h1>
    </div>
  );
};

export default Step2;
