"use client";
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
import RickImage from "../assets/rick-img.png";
import { FaCheckCircle } from "react-icons/fa";
const Profile = () => {
   const [nicknameIsOkay, setNicknameIsOkay] = useState(false);
   return (
      <div className="profile w-full h-full flex flex-col mt-[42px] px-6">
         <div className="title-container w-full flex items-center justify-center text-center flex-col">
            <h5 className="font-extrabold text-[30px]">Heyy!</h5>
            <h5 className="font-extrabold text-[30px] -mt-2">
               Welcome to Schmeckle
            </h5>
         </div>
         <div className="logo-container w-full flex items-center justify-center">
            <Image
               src={Logo}
               alt="schmeckle-logo"
               className="w-[180px] h-auto"
            />
         </div>
         <div className="nickname-input w-full flex flex-col gap-1">
            <p className="font-bold text-[20px]">Nickname</p>
            <div className="input-container w-full relative">
               <input
                  type="text"
                  className="w-full border-2 border-yellow-main bg-[#1C1C1E] rounded-[10px] h-[58px] pl-4 text-lg font-semibold outline-none"
               />
               {nicknameIsOkay ? (
                  <div className="check-circle-container absolute right-4 top-4 flex items-center justify-center">
                     <FaCheckCircle className="text-yellow-main w-[24px] h-auto" />
                  </div>
               ) : (
                  <></>
               )}
            </div>
         </div>
         <div className="continue-button-outer-container h-full flex-1 flex items-end w-full pb-4">
            <div className="button-container w-full flex flex-col">
               <div className="rick-container w-full flex items-center justify-center">
                  <Image
                     src={RickImage}
                     alt="rick"
                     className="w-[70px] h-auto"
                  />
               </div>
               <div className="button-container w-full flex items-center justify-center">
                  <button className="w-full h-[58px] bg-yellow-main rounded-[15px]">
                     <h5 className="text-black font-bold text-[18px]">
                        Continue
                     </h5>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Profile;
