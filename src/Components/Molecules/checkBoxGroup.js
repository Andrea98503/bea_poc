import React from "react";
import Check from "../../assets/icons/check";
const CheckBoxGroup = ({optionName, id}) => {
    return (
        <div className="flex items-center mb-4 min-w-80 mr-6">
            <input id={id} type="checkbox" className="relative peer shrink-0 appearance-none border h-7 w-7 bg-checkbox border-checkbox-border rounded-sm" />
      <Check />
            <label for={id} className="ml-7 text-2xl font-thin">{optionName}</label>
        </div>

    )
}
export default CheckBoxGroup;