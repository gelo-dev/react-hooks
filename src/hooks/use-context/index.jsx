import React, { createContext, useContext, useState } from "react";

// Create the Context
const LightContext = createContext();

// Main Smart Home Controller
export const SmartHome = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <LightContext.Provider value={{ isLightOn, setIsLightOn }}>
      <div className="bg-amber-200 rounded-2xl">
        <h1>🏠 Smart Home Control</h1>
        <LightSwitch />
        <LightBulb />
      </div>
    </LightContext.Provider>
  );
};

// Light switch to toggle light
const LightSwitch = () => {
  const { setIsLightOn } = useContext(LightContext);

  return (
    <button
      onClick={() => setIsLightOn((prev) => !prev)}
      className="px-5 py-2.5 m-2 cursor-pointer  bg-amber-500 rounded-2xl outline-2 hover:caret-amber-700"
    >
      💡 Toggle Light
    </button>
  );
};

// Light bulb to show current light state
const LightBulb = () => {
  const { isLightOn } = useContext(LightContext);

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: isLightOn ? "green" : "red",
        margin: "20px auto",
        transition: "0.3s",
      }}
    >
      <p style={{ textAlign: "center", paddingTop: "35px" }}>
        {isLightOn ? "ON" : "OFF"}
      </p>
    </div>
  );
};
