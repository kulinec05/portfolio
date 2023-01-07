import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionTitle = ({ initial, hovered, first, link }) => {
  const [hover, sethover] = useState(false);
  const navigate = useNavigate();
  return (
    <motion.span
      style={{
        opacity: 1,
        marginLeft: "100px",
        fontSize: "10vw",
        color: first && "red",
      }}
      onHoverStart={() => sethover(true)}
      onHoverEnd={() => sethover(false)}
      exit={{ opacity: 0 }}
    >
      {hover ? (
        <motion.div
          animate={{ x: 20, fontWeight: 600 }}
          onClick={() => navigate(link)}
        >
          {hovered}
        </motion.div>
      ) : (
        <motion.div>{initial}</motion.div>
      )}
    </motion.span>
  );
};

export default MotionTitle;
