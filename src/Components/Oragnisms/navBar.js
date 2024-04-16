import React from "react";
import MenuIcon from "../../assets/icons/menuIcon";
import BackArrow from "../../assets/icons/backArrow";
import MyAccount from "../../assets/icons/myAccount";

const NavBar = () => {
    return (
        <nav>
            <div className="flex bg-navbar-red h-20 flex-row w-full justify-between items-center pr-8 pl-3 rounded-t-2xl">
                <div className="flex flex-row gap-1">
                    <div className="h-10 w-10"><BackArrow /></div>
                    <div className="h-10 w-10">
                        <MenuIcon />
                    </div>
                </div>

                <div className="text-2xl justify-self-center text-white font-thin">
                    Open new account
                </div>
                <div className="h-8 w-8">
                    <MyAccount />
                </div>
            </div>

        </nav>
    )
}
export default NavBar;