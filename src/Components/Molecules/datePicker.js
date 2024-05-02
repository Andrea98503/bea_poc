import React, { useState } from "react";
import CalenderIcon from "../../assets/icons/calender";
import { Calendar } from "primereact/calendar";
import { Field, ErrorMessage } from "formik";

const DatePicker = ({ name }) => {
  const [showCalender, setShowCalender] = useState(false);
  const [date, setDate] = useState("yy/mm/dd");
  const toggleOptions = () => {
    setShowCalender(!showCalender);
  };
  return (
    <div>
      <div className="flex flex-row">
        <Field
          name={name}
          type="date"
          className="px-4 relative peer shrink-0 appearance-none border h-11 w-75 bg-inputBg border-inputBorder rounded-xl"
        />
      </div>
      {showCalender && (
        <div>
          {/* <Calendar value={date} onChange={(e) => setDate(e.value)} /> */}
        </div>
      )}
    </div>
  );
};
export default DatePicker;
