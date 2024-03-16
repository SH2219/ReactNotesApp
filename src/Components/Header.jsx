import React from "react";
import "./index.css";
const Header = ({ handleDarkMode }) => {
  return (
    <>
      <div className="container header">
        <h1 className="text-center">Notes</h1>
        <button
          onClick={() =>
            handleDarkMode((previousDarkMode) => !previousDarkMode)
          }
          className="save2"
        >
          Dark
        </button>
      </div>
    </>
  );
};

export default Header;
