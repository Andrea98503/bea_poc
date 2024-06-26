import React from "react";

const RoundedCross = ({color}) => {
    return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Livello 1"
      viewBox="0 0 128 128"
      width="100%"
      height="100%"
    >
      <path fill= {color} d="M64 0a64 64 0 1064 64A64.07 64.07 0 0064 0zm0 122a58 58 0 1158-58 58.07 58.07 0 01-58 58z"></path>
      <path fill= {color} d="M92.12 35.79a3 3 0 00-4.24 0L64 59.75l-23.87-24A3 3 0 0035.88 40l23.88 24-23.88 24a3 3 0 004.25 4.24L64 68.25l23.88 24A3 3 0 0092.13 88L68.24 64l23.89-24a3 3 0 00-.01-4.21z"></path>
    </svg>
      );
}

export default RoundedCross;
