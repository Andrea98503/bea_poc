import React from "react";

const Button = ({ text, type, dissabled, onClick }) => {
    let bgColor = ""
    if (type === "default") {
        if (dissabled) {
            bgColor = "bg-white"
        } else {
            bgColor = "bg-header-gray"
        }
    } else if (type === "Next") {
        bgColor = "bg-navbar-red"
    } else {
        bgColor = "bg-white"
    }

    let borderColor = ""
    if (type === "default") {
        borderColor = "border-header-gray"
    } else {
        borderColor = "border-navbar-red"
    }

    let textColor = ""
    if (type === "Finish") {
        textColor = "text-navbar-red"
    } else if (type === "default") {
        if (dissabled) {
            textColor = "text-header-gray"
        } else {
            textColor = "text-white"
        }
    } else {
        textColor = "text-white"
    }

    return (
        <button onClick={onClick} disabled={dissabled} className={`min-w-48 rounded-3xl text-2xl border-2 text-center justify-center py-2 font-light ${bgColor} ${borderColor} ${textColor}`}>{text}</button>
    )

}
export default Button