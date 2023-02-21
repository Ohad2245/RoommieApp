import React from "react";
import zxcvbn from "zxcvbn";

const PasswordStrength = ({ registerPassword }) => {
  const testResult = zxcvbn(registerPassword);
  const num = (testResult.score * 100) / 4;

  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return "Very weak";
      case 1:
        return "Weak";
      case 2:
        return "Fear";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  const functionProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#f00";
      case 2:
        return "#FFAD00";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };

  const changePassword = () => ({
    width: `${num}%`,
    height: "7px",
    transition: "1s",
    background: functionProgressColor(),
    filter: "blur(1.5px)",
  });
  return (
    <div
      className="progress"
      style={{ height: "7px", background: "gray", borderRadius: "10px" }}
    >
      <div className="progress-bar" style={changePassword()}></div>
      <p style={{ color: functionProgressColor() }}>{createPassLabel()}</p>
    </div>
  );
};

export default PasswordStrength;
