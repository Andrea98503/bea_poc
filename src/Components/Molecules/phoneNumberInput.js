import React, { useState } from "react";
import DownArrow from "../../assets/icons/downArrow";
import { Field, ErrorMessage } from "formik";

const PhoneNumberInput = ({ name, setFieldValue }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const [flag, setflag] = useState(""); 
  const [dialCode, setDialCode] = useState(""); 
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleSelection = (value) => {
    setShowOptions(false);
    setFieldValue(name, value + phoneNumber);
  };
  const countries = [
    {name: "UNITED KINGDOM", dialCode: "+44", code: "GB", flag: "🇬🇧", isoCode3: "GBR"},
    {name: "INDIA", dialCode: "+91", code: "IN", flag: "🇮🇳", isoCode3: "IND"},
    {name: "CHINA", dialCode: "+86", code: "CN", flag: "🇨🇳", isoCode3: "CHN"},
    {name: "INDONESIA", dialCode: "+62", code: "ID", flag: "🇮🇩", isoCode3: "IDN"},
    {name: "PAKISTAN", dialCode: "+92", code: "PK", flag: "🇵🇰", isoCode3: "PAK"},
    {name: "BANGLADESH", dialCode: "+880", code: "BD", flag: "🇧🇩", isoCode3: "BGD"},
    {name: "JAPAN", dialCode: "+81", code: "JP", flag: "🇯🇵", isoCode3: "JPN"},
    {name: "CANADA", dialCode: "+1", code: "CA", flag: "🇨🇦", isoCode3: "CAN"},
    {name: "BRAZIL", dialCode: "+55", code: "BR", flag: "🇧🇷", isoCode3: "BRA"},
    {name: "AUSTRALIA", dialCode: "+61", code: "AU", flag: "🇦🇺", isoCode3: "AUS"},
    {name: "AFGHANISTAN", dialCode: "+93", code: "AF", flag: "🇦🇫", isoCode3: "AFG"},
  ];

  return (
    <div className="relative">
      <div className="flex-column">
        <div className="flex flex-row">
          <div
            onClick={toggleOptions}
            className="shrink-0 border border-r-0 h-11 w-7 bg-inputBg border-inputBorder rounded-l-xl"
          >
            <div className="h-5 w-5 m-2.5 ml-1.5 mt-3">
              <DownArrow />
            </div>
          </div>
          <Field
            as="select"
            id={`${name}_flag`}
            name={`${name}_flag`}
            value={flag}
            className={`relative peer shrink-0 appearance-none border border-x-0 h-11 w-8 bg-inputBg border-inputBorder text-3xl text-slate-500 font-extralight`}
          >
            {countries.map((option, index) => (
              <option key={index} value={option.flag}>
                {option.flag}
              </option>
            ))}
          </Field>
          <Field
            as="select"
            id={`${name}_dialCode`}
            name={`${name}_dialCode`}
            value={dialCode}
            className={`relative peer shrink-0 appearance-none border border-l-0  h-11 w-8 bg-inputBg border-inputBorder text-l text-slate-500 font-extralight`}
          >
            {countries.map((option, index) => (
              <option key={index} value={option.dialCode}>
                {option.dialCode}
              </option>
            ))}
          </Field>
          <input
            type="text"
            id={`${name}_phoneNumber`}
            name={name}
            value={phoneNumber}
            onChange={handleChange}
            className="px-4 relative peer shrink-0 appearance-none border border-l-0 h-11 w-52 bg-inputBg border-inputBorder rounded-r-xl"
          />
        </div>
        <div className="text-xs text-red-600 text-right">
          <ErrorMessage name={name} />
        </div>
      </div>
      {showOptions && (
        <div className="absolute bg-dropdownBg rounded-lg shadow-lg mt-2 z-10 w-full py-2">
          <ul>
            {countries.map((item, i) => (
              <li
                key={i}
                onClick={() => {handleSelection(item.dialCode); setDialCode(item.dialCode); setflag(item.flag)}}
                className="text-dropdownSelected hover:bg-dropdownSelected hover:text-white font-extralight px-4 py-0.5"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PhoneNumberInput;
