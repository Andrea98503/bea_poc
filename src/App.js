import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSelection from "./Components/Pages/productSelection";
import PersonalInfo from "./Components/Pages/personalInfo";
import ProductInfo from "./Components/Pages/productInfo";
import Finish from "./Components/Pages/finish";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNextClick = () => {
    setCurrentScreen((prev) => prev + 1);
  };

  const handlePreviousClick = () => {
    setCurrentScreen((prev) => prev - 1);
  };

  const steps = [
    <ProductSelection next={handleNextClick} />,
    <PersonalInfo next={handleNextClick} prev={handlePreviousClick} />,
    <ProductInfo next={handleNextClick} prev={handlePreviousClick} />,
    <Finish />,
  ];

  return <Router>{steps[currentScreen]}</Router>;
};

export default App;
