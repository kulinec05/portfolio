import React from "react";
import { motion } from "framer-motion";
import HomeExitANimation from "../../components/HomeExitANimation";

const About = () => {
  return (
    <>
      <HomeExitANimation />
      <motion.div
        style={{
          position: "absolute",
          margin: "80px 0 32px 16px",
          fontSize: "10vw",
          color: "white",
        }}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
      >
        About
      </motion.div>
    </>
  );
};

export default About;
