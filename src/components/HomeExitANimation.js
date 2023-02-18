import React from "react";
import { motion } from "framer-motion";

const HomeExitANimation = () => {
  return (
    <motion.span
      style={{
        position: "fixed",
        width: "calc(100vw - 20px)",
        height: "calc(100vh - 20px)",
        margin: "10px",
        borderRadius: "20px",
        display: "block",
        backgroundColor: "white",
      }}
      animate={{ width: 0, height: 0 }}
    />
  );
};

export default HomeExitANimation;
