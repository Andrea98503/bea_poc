import React from "react";

const Button = ({ text, variant, dissabled, onClick, type }) => {
  let bgColor = "";
  if (variant === "default") {
    if (dissabled) {
      bgColor = "bg-white";
    } else {
      bgColor = "bg-header-gray";
    }
  } else if (variant === "Next") {
    bgColor = "bg-navbar-red";
  } else {
    bgColor = "bg-white";
  }

  let borderColor = "";
  if (variant === "default") {
    borderColor = "border-header-gray";
  } else {
    borderColor = "border-navbar-red";
  }

  let textColor = "";
  if (variant === "Finish") {
    textColor = "text-navbar-red";
  } else if (variant === "default") {
    if (dissabled) {
      textColor = "text-header-gray";
    } else {
      textColor = "text-white";
    }
  } else {
    textColor = "text-white";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={dissabled}
      className={`min-w-48 rounded-3xl text-2xl border-2 text-center justify-center py-2 font-light ${bgColor} ${borderColor} ${textColor}`}
    >
      {text}
    </button>
  );
};
export default Button;
