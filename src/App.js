import React, { useState } from "react";
import HorizontalLinearStepper from "./components/Stepper";

// const imgData = ["child", "boy", "youngman", "grownman", "oldman"];

function App() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <>
      <HorizontalLinearStepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </>
  );
}

export default App;
