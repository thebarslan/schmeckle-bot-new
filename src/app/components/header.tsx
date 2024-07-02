import React from "react";
import { IoClose } from "react-icons/io5";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Header = () => {
   return (
      <div className="w-full h-20 px-6 flex justify-between items-center pt-4">
         <div className="close-button flex items-center">
            <IoClose className="font-black w-12 h-auto" />
         </div>
         <div className="header-title flex flex-col items-center text-center w-full flex-1">
            <h5 className="font-extrabold text-[20px]">Schmeckle</h5>
            <h5 className="font-extrabold text-white-text text-[15px]">BOT</h5>
         </div>
         <div className="menu-button">
            <BiDotsHorizontalRounded className="w-12 h-auto" />
         </div>
      </div>
   );
};

export default Header;
