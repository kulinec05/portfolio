import React, { useState } from "react";
import HorizontalLinearStepper from "./components/Stepper";
import Box from '@mui/material/Box'

// const imgData = ["child", "boy", "youngman", "grownman", "oldman"];

function App() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <>
    <Box sx={{width:'100%'}}>
      
    </Box>
      <HorizontalLinearStepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </>
  );
}

export default App;
