import React, { useState } from "react";
import DownArrow from "../../assets/icons/downArrow";
import { Field, ErrorMessage } from "formik";

const Dropdown = ({ options, width, height, name, setFieldValue }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSelection = (value) => {
    setShowOptions(false);
    setFieldValue(name, value);
  };

  return (
    <div className="relative">
      
        <div className="flex-column">
        <div className="flex flex-row">
        <Field
          as="select"
          id={name}
          name={name}
          className={`relative peer shrink-0 appearance-none border px-4 ${width} ${height}  bg-inputBg border-inputBorder rounded-l-xl`}
        >
          <option value=""></option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Field>
        <div
          onClick={toggleOptions}
          className="shrink-0 border border-l-0 h-11 w-11 bg-inputBg border-inputBorder rounded-r-xl"
        >
          <div className="h-5 w-5 m-2.5 mt-3">
            <DownArrow />
          </div>
        </div>
        </div>
        <div className="text-xs text-red-600 text-right">
          <ErrorMessage name={name} />
        </div>
      </div>
      {showOptions && (
        <div className="absolute bg-dropdownBg rounded-lg shadow-lg mt-2 z-10 w-full py-2">
          <ul>
            {options.map((item, i) => (
              <li
                key={i}
                onClick={() => handleSelection(item)}
                className="text-dropdownSelected hover:bg-dropdownSelected hover:text-white font-extralight px-4 py-0.5"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
