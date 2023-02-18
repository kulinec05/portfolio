import React from "react";
import { motion } from "framer-motion";
import { Row } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const [hover, sethover] = React.useState(false);
  const { pathname } = useLocation();
  const [selected, setSelected] = React.useState("home");
  const navigate = useNavigate();

  return (
    <>
      <Row>
        <motion.span
          style={{
            width: "40px",
            position: "fixed",
            top: 0,
            margin: "10px",
            padding: "3px 10px",
            left: 0,
            display: pathname === "/home" ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            overflowY: "hidden",
            backgroundColor: "white",
            height: "50px",
            borderRadius: "20px",
            fontSize: "25px",
          }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ width: "130px" }}
          onHoverStart={() => {
            sethover(true);
          }}
          onHoverEnd={() => {
            sethover(false);
          }}
          onClick={() => navigate("/home")}
        >
          <motion.span
            style={{ marginRight: "10px", display: hover || "none" }}
          >
            BACK{" "}
          </motion.span>

          <RollbackOutlined style={{ fontSize: "30px" }} />
        </motion.span>
      </Row>
      <div style={{ width: "100vw", minHeight: "100vh" }}>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
