import React, { useState } from "react";
import RoundedCross from "../../assets/icons/roundedCross";
import CheckBoxGroup from "../Molecules/checkBoxGroup";
import Button from "../Attoms/button";
import Modal from "../Molecules/modal";
import Dropdown from "../Molecules/dropdown";
import DatePicker from "../Molecules/datePicker";

const Finish = () => {
    const [isShowModal, setShowModal] = useState(false)
    return (
        <div>
            <div className="rounded-t-lg rounded-b-3xl mx-8 mt-12 mb-10 shadow-md">
                <div className="bg-header-gray h-16 flex flex-row items-center rounded-t-lg w-full px-4">
                    <div className="justify-center w-full">
                        <div className="text-2xl text-white">Personal Information</div>
                    </div>
                    <div onClick={() => setShowModal(true)} className="h-9 w-9 justify-self-end"><RoundedCross color={"#fff"} /></div>
                </div>
                <div className="py-8 mr-5">
                    Finish
                </div>
            </div>
            
            {isShowModal &&
                (<Modal content={"Do you want to cancel this ?"} buttons={[
                    <Button
                        type="default"
                        onClick={() => setShowModal(false)}
                        text="Cancel"
                    />,
                    <Button
                        type="default"
                        onClick={() => setShowModal(false)}
                        text="Ok"
                    />
                ]} />)}
        </div>
    )
}
export default Finish;