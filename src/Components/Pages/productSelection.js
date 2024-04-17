import React, { useState } from "react";
import RoundedCross from "../../assets/icons/roundedCross";
import CheckBoxGroup from "../Molecules/checkBoxGroup";
import Button from "../Attoms/button";
import Modal from "../Molecules/modal";

const ProductSelection = () => {
    const [isShowModal, setShowModal] = useState(false)
    const ProductNames = [
        { name: "Passbook Savings", index: "Passbook Savings" },
        { name: "International Savings", index: "International Savings" },
        { name: "Current Account", index: "Current Account" },
        { name: "Account Teen", index: "Account Teen" },
        { name: "ISA Account", index: "ISA Account" },
        { name: "Account Children", index: "Account Children" },
        { name: "Call Deposit", index: "Call Deposit" },
        { name: "Smart Savings", index: "Smart Savings" },
        { name: "Fixed Time Deposit", index: "Fixed Time Deposit" },
    ]
    return (
        <div>
            <div className="rounded-t-lg rounded-b-3xl mx-8 mt-12 mb-10 shadow-md">
                <div className="bg-header-gray h-16 flex flex-row items-center rounded-t-lg w-full px-4">
                    <div className="justify-center w-full">
                        <div className="text-2xl text-white text-center">Product Selection</div>
                    </div>
                    <div onClick={() => setShowModal(true)} className="h-9 w-9 justify-self-end"><RoundedCross color={"#fff"} /></div>
                </div>
                <div className="px-4 py-6">
                    <div className="flex flex-row gap-5">
                        <div className="rounded-full bg-header-gray h-8 w-8 shrink-0">
                            <div className="text-white text-xl pl-3 pt-0.5 font-thin">1</div>
                        </div>
                        <div className="md:w-5/12 text-2xl font-thin">
                            Which product would you like to open?
                        </div>
                    </div>
                    <div className="ml-12 mr-5 mt-9 gap-1.5 flex flex-wrap">
                        {ProductNames.map((item) => (
                            <CheckBoxGroup key={item.index} optionName={item.name} id={item.index} />
                        ))}

                    </div>
                    <div className="text-red-600 font-thin text-base text-end mr-10 mt-7">*Please choose at least one option</div>

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
export default ProductSelection;