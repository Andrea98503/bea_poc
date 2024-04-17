import React, { useState } from "react";
import NavBar from "./Components/Oragnisms/navBar";
import Footer, { FORM_NAVIGATION, SCREEN_NAMES } from "./Components/Oragnisms/footer";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(SCREEN_NAMES.PRODUCT_SELECTION.KEY);

  const handleNextClick = () => {
    const nextScreenKey = getNextScreenKey(currentScreen);
    setCurrentScreen(nextScreenKey);
  };

  const handlePreviousClick = () => {
    const prevScreenKey = getPreviousScreenKey(currentScreen);
    setCurrentScreen(prevScreenKey);
  };

  const getNextScreenKey = (currentScreenKey) => {
    const currentStep = FORM_NAVIGATION.find(item => item.CURRENT_SCREEN_KEY === currentScreenKey);
    return currentStep ? currentStep.NEXT_SCREEN_KEY : null;
  };

  const getPreviousScreenKey = (currentScreenKey) => {
    const currentStep = FORM_NAVIGATION.find(item => item.NEXT_SCREEN_KEY === currentScreenKey);
    return currentStep ? currentStep.CURRENT_SCREEN_KEY : null;
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case SCREEN_NAMES.PRODUCT_SELECTION.KEY:
        return SCREEN_NAMES.PRODUCT_SELECTION.ELEMENT;
      case SCREEN_NAMES.PERSONAL_INFO.KEY:
        return SCREEN_NAMES.PERSONAL_INFO.ELEMENT;
      case SCREEN_NAMES.PRODUCT_INFO.KEY:
        return SCREEN_NAMES.PRODUCT_INFO.ELEMENT;
      case SCREEN_NAMES.FINISH.KEY:
        return SCREEN_NAMES.FINISH.ELEMENT;
      default:
        return null;
    }
  };
  console.log("***",currentScreen);
  return (
    <div className="xl:mx-72 mx-10">
      <NavBar />
      {renderCurrentScreen()}
      <Footer
      step={currentScreen}
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
      />
    </div>
  );
};

export default App;
