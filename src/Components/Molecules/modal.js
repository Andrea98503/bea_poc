import React from "react";
import RoundedCross from "../../assets/icons/roundedCross";

const Modal = ({buttons, content}) => {
    return (
          <><div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
        >
            <div className="relative w-1/2">
                <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex  p-5 flex-col w-full">
                        <div className="h-8 w-8 self-end"><RoundedCross color={"#FF0000"}/></div>
                        <div className="text-2xl font-thin py-5 pl-5">{content}</div>
                    </div>
                    <div className="flex items-center justify-end p-9 justify-between">
                        {buttons}
                    </div>
                </div>
            </div>
        </div><div className="opacity-25 fixed inset-0 z-40 bg-black"></div></>

    )
}
export default Modal;