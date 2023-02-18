import { Row, DatePicker } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MotionTitle from "../components/MotionTitle";

const Pages = [
  {
    initial: "Hello",
    hovered: "Projects",
    link: "/projects",
  },
  {
    initial: "I'M",
    hovered: "About",
    link: "/about",
  },
  {
    initial: "SHAMIL",
    hovered: "Contacts",
    link: "/contacts",
  },
];

const Home = () => {
  return (
    <AnimatePresence>
      <motion.div
        key="home-box"
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: "20px",
          margin: "10px",
          height: "56px",
          width: "56px",
          flexDirection: "column",
        }}
        animate={{ width: "auto", height: "calc(100vh - 20px)" }}
        exit={{
          height: "56px",
          width: "56px",
          transition: { duration: 2 },
        }}
      >
        {Pages.map((page, index) => (
          <MotionTitle
            initial={page.initial}
            hovered={page.hovered}
            link={page.link}
            order={index}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
