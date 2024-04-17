import React, { useState } from "react";
import DownArrow from "../../assets/icons/downArrow";

const Dropdown = ({options, width, height}) => {
    const [showOptions, setShowOptions] = useState(false)
    const [selectedOption, setSelectedOption] = useState("")
    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };
    const toggleSelection = (item) => {
        setSelectedOption(item);
        setShowOptions(false);
    };
    return (
        <div className="relative">
        <div className="flex flex-row">
            <input id="title" type="dropdown" value={selectedOption} className={`relative peer shrink-0 appearance-none border px-4 ${width} ${height}  bg-inputBg border-inputBorder rounded-l-xl`} /><div onClick={toggleOptions} className="shrink-0 border border-l-0 h-11 w-11 bg-inputBg border-inputBorder rounded-r-xl"><div  className="h-5 w-5 m-2.5 mt-3"><DownArrow /></div></div>
        </div>
        {showOptions && (
            <div className="absolute bg-dropdownBg rounded-lg shadow-lg mt-2 z-10 w-full py-2"><ul>{options.map((item, i)=> (<li key={i} onClick={() => toggleSelection(item)} className="text-dropdownSelected hover:bg-dropdownSelected hover:text-white font-extralight px-4 py-0.5">{item}</li>))}
            </ul></div>
        )}
        </div>
    )
}
export default Dropdown;