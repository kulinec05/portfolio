import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionTitle = ({ initial, hovered, order, link }) => {
  const [hover, sethover] = useState(false);
  const navigate = useNavigate();
  return (
    <motion.span
      style={{
        opacity: 1,
        marginLeft: "100px",
        fontSize: "10vw",
        color: order === 0 && "red",
      }}
      initial={{ x: "-100vw" }}
      transition={{ x: { delay: order * 0.3 } }}
      animate={{ x: 0 }}
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
