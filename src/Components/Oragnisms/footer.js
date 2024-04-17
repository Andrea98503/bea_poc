import React from "react";
import Button from "../Attoms/button";
import Finish from "../Pages/finish";
import ProductInfo from "../Pages/productInfo";
import PersonalInfo from "../Pages/personalInfo";
import ProductSelection from "../Pages/productSelection";
export const SCREEN_NAMES = {
    PRODUCT_SELECTION: {
        KEY: "PRODUCT_SELECTION",
        ELEMENT: <ProductSelection />
    },
    PERSONAL_INFO: {
        KEY: "PERSONAL_INFO",
        ELEMENT: <PersonalInfo />
    },
    PRODUCT_INFO: {
        KEY: "PRODUCT_INFO",
        ELEMENT: <ProductInfo />
    },
    FINISH: {
        KEY: "FINISH",
        ELEMENT: <Finish />
    }
}
export const FORM_NAVIGATION = [
    {
        STEP: 1,
        CURRENT_SCREEN_KEY: SCREEN_NAMES.PRODUCT_SELECTION.KEY,
        NEXT_SCREEN_KEY: SCREEN_NAMES.PERSONAL_INFO.KEY,
    },
    {
        STEP: 2,
        CURRENT_SCREEN_KEY: SCREEN_NAMES.PERSONAL_INFO.KEY,
        NEXT_SCREEN_KEY: SCREEN_NAMES.PRODUCT_INFO.KEY,
    },
    {
        STEP: 3,
        CURRENT_SCREEN_KEY: SCREEN_NAMES.PRODUCT_INFO.KEY,
        NEXT_SCREEN_KEY: SCREEN_NAMES.FINISH.KEY,
    }
]
const Footer = ({ onPreviousClick, onNextClick, step }) => {

    return (
        <div className=" w-full">
            {
                step !== "FINISH" ? (
                    <div className="mx-8 flex flex-row justify-between flex-wrap items-center"><div><Button dissabled={step === "PRODUCT_SELECTION" ? true : false} onClick={onPreviousClick} type={"default"} text={"Previous"} /></div><div><Button onClick={onNextClick} type={"Next"} text={"Next"} /></div></div>
                ) : (<div className="flex items-center x-full justify-center"><Button type={"Finish"} text={"Finish"} /></div>)
            }</div>

    )
}
export default Footer;