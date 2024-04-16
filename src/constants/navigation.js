import React from "react";
import ProductSelection from "../Components/Pages/productSelection";
import PersonalInfo from "../Components/Pages/personalInfo";
import ProductInfo from "../Components/Pages/productInfo";
import Finish from "../Components/Pages/finish";

export const SCREEN_NAMES = {
    PRODUCT_SELECTION: {
        KEY: "PRODUCT_SELECTION",
        ELEMENT: <ProductSelection/>
    },
    PERSONAL_INFO: {
        KEY: "PERSONAL_INFO",
        ELEMENT: <PersonalInfo/>
    },
    PRODUCT_INFO: {
        KEY: "PRODUCT_INFO",
        ELEMENT: <ProductInfo/>
    },
    FINISH: {
        KEY: "FINISH",
        ELEMENT: <Finish/>
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