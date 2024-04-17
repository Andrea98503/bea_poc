import React, { useState } from "react";
import RoundedCross from "../../assets/icons/roundedCross";
import CheckBoxGroup from "../Molecules/checkBoxGroup";
import Button from "../Attoms/button";
import Modal from "../Molecules/modal";
import Dropdown from "../Molecules/dropdown";
import DatePicker from "../Molecules/datePicker";

const Finish = () => {
    return (
        <div>
            <div className="m-20">
                <div className="py-8 mr-5 text-2xl font-extralight">
                    By using our services, you agree to comply with and be bound by our terms and conditions
                </div>
                <div >
                    <CheckBoxGroup id={"dec"} optionName={["Customer Declaration"]}/>
                </div>
            </div>
        </div>
    )
}
export default Finish;