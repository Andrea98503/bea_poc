import React, { useState } from "react";
import CalenderIcon from "../../assets/icons/calender";
import { Calendar } from 'primereact/calendar';
        

const DatePicker = () => {
    const [showCalender, setShowCalender] = useState(false)
    const [date, setDate] = useState("yy/mm/dd")
    const toggleOptions = () => {
        setShowCalender(!showCalender);
    };
    return (
        <div>
            <div className="flex flex-row">
                <input id="title" type="dropdown" className="relative peer shrink-0 appearance-none border h-11 w-64 bg-inputBg border-inputBorder rounded-l-xl" /><div onClick={toggleOptions} className="shrink-0  border border-l-0 h-11 w-11 bg-inputBg border-inputBorder rounded-r-xl"><div className="h-5 w-5 m-2.5 mt-3"><CalenderIcon /></div></div>
            </div>
            {showCalender && (
                <div>
               {/* <Calendar value={date} onChange={(e) => setDate(e.value)} /> */}
               </div>
            )}
        </div>
    )
}
export default DatePicker;