import React from "react";
import HomeExitANimation from "../../components/HomeExitANimation";

const PageNotFound = () => {
  return (
    <>
      <HomeExitANimation />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Page Not Found</h1>
      </div>
    </>
  );
};

export default PageNotFound;
