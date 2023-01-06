import React, { useState } from "react";
import HorizontalLinearStepper from "./components/Stepper";
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { Typography } from "@mui/material";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { ROUTES } from "./constants";
// const imgData = ["child", "boy", "youngman", "grownman", "oldman"];

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const routes = useRoutes(ROUTES)
  return routes
}

export default App;
