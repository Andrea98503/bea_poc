import React, { useState } from "react";
import RoundedCross from "../../assets/icons/roundedCross";
import CheckBoxGroup from "../Molecules/checkBoxGroup";
import Button from "../Attoms/button";
import Modal from "../Molecules/modal";
import Dropdown from "../Molecules/dropdown";
import DatePicker from "../Molecules/datePicker";

const PersonalInfo = () => {
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
                    <ul className="grid grid-flow-row auto-rows-max">
                        <div className="flex flex-row justify-between mb-3"><label for={"title"} className="ml-7 text-2xl font-thin">Title</label>
                            <Dropdown width={"w-64"} height={"h-11"} options={["Mr.", "Mrs.", "Ms.", "Miss", "Dr.", "Prof.", "Hon.", "Lady.", "Lord.", "Sir."]}/></div>
                        <div className="flex flex-row justify-between mb-3"><label for={"surname"} className="ml-7 text-2xl font-thin">Surname</label>
                            <input id="surname" type="dropdown" className="relative peer shrink-0 appearance-none border h-11 w-75 bg-inputBg border-inputBorder rounded-xl" /></div>
                        <div className="flex flex-row justify-between mb-3"><label for={"forenames"} className="ml-7 text-2xl font-thin">Forenames</label>
                            <input id="forenames" type="dropdown" className="relative peer shrink-0 appearance-none border h-11 w-75 bg-inputBg border-inputBorder rounded-xl" /></div>
                        <div className="flex flex-row justify-between mb-3"><label for={"dob"} className="ml-7 text-2xl font-thin">Date of Birth</label>
                        <DatePicker/></div>
                        <div className="flex flex-row justify-between mb-3"><label for={"otherNames"} className="ml-7 text-2xl font-thin">Former or Other Names( if any)</label>
                            <input id="otherNames" type="dropdown" className="relative peer shrink-0 appearance-none border h-11 w-75 bg-inputBg border-inputBorder rounded-xl" /></div>
                        <div className="flex flex-row justify-between mb-3"><label for={"gender"} className="ml-7 text-2xl font-thin">Gender</label>
                        <Dropdown width={"w-64"} height={"h-11"} options={["Male", "Female", "Other"]}/></div>
                        <div className="flex flex-row justify-between mb-3"><label for={"maritalStatus"} className="ml-7 text-2xl font-thin">Marital Status</label><Dropdown width={"w-64"} height={"h-11"} options={["Single", "Married"]}/></div>
                    </ul>
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
export default PersonalInfo;