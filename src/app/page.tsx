"use client";

import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import RickMini from "./assets/rick-mini.png";
import Script from "next/script";
import Rick from "../app/assets/rick-img.png";
import RickHead from "../app/assets/rick-head.png";
import Ufo from "../app/assets/ufo.png";
import Logo from "../app/assets/logo.png";
import GameJoinBg from "../app/assets/bg.jpg";

import OctopusLeftBlue from "../app/assets/ahtapot-left-blue.png";
import OctopusRightBlue from "../app/assets/ahtapot-right-blue.png";
import PolygonLeft from "../app/assets/PolygonLeft.png";
import PolygonRight from "../app/assets/PolygonRight.png";
import Farming from "./components/farming";
import BottomNavbar from "./components/bottomnavbar";

export default function Home() {
   const totalXP = 150;
   const [currentXP, setCurrentXP] = useState(100);
   const [balance, setBalance] = useState(123131);
   const [usernameInput, setUsernameInput] = useState("");
   const [isActive, setIsActive] = useState(false);

   function formatBalance(balance: number) {
      return new Intl.NumberFormat("en-US", {
         minimumFractionDigits: 3,
         maximumFractionDigits: 3,
      }).format(balance);
   }
   const handleClaim = () => {
      console.log("Claim");
   };
   if (!isActive) {
      return (
         <main className="w-full h-full flex flex-col pt-16 justify-between pb-8">
            <Script
               src="https://telegram.org/js/telegram-web-app.js"
               strategy="lazyOnload"
               onLoad={() => {
                  if (window.Telegram) {
                     const tele = window.Telegram.WebApp;
                     tele.ready();
                     tele.expand();
                  }
               }}
            />
            <div className="h-full flex-1 w-full flex flex-col">
               <div className="title w-full flex flex-col items-center">
                  <h1 className="text-4xl font-semibold mb-1">Heyy!</h1>
                  <h1 className="text-4xl font-semibold mb-4">
                     Welcome to Schmeckle
                  </h1>
               </div>
               <div className="logo-container w-full flex items-center justify-center">
                  <Image
                     src={Logo}
                     alt="schmeckle-logo"
                     className="w-28 h-auto"
                  />
               </div>
               <div className="input-container w-full flex flex-col px-5 ">
                  <h5 className="pl-2">Nickname</h5>
                  <input
                     type="text"
                     placeholder=""
                     value={usernameInput}
                     onChange={(e) => setUsernameInput(e.target.value)}
                     className="border border-yellow-main px-2 h-12 rounded-[10px] mb-4 w-full outline-none text-white bg-transparent mt-2"
                  />
               </div>
            </div>
            <div className="button-container w-full h-auto px-5">
               <button
                  className="w-full h-[60px] bg-yellow-main rounded-[10px]"
                  onClick={() => {
                     setIsActive(true);
                  }}
               >
                  <h5 className="text-black font-bold text-[18px]">Continue</h5>
               </button>
            </div>
         </main>
      );
   }

   return (
      <>
         <main className="w-full h-full flex flex-col px-5 mt-[42px]">
            <Script
               src="https://telegram.org/js/telegram-web-app.js"
               strategy="lazyOnload"
               onLoad={() => {
                  if (window.Telegram) {
                     const tele = window.Telegram.WebApp;
                     tele.ready();
                     tele.expand();
                  }
               }}
            />
            <div className="top-bar w-full flex justify-between gap-12">
               <div className="left flex gap-2 items-center w-full flex-1">
                  <div className="profile-icon h-10 w-10 rounded bg-yellow-main flex items-center justify-center">
                     <Image src={RickMini} alt="rick-mini" />
                  </div>
                  <div className="username text-[12px] font-semibold">
                     Morty Smith (Schwifty)
                  </div>
               </div>
               <div className="right flex flex-col gap-[2px]  w-full flex-1 justify-center">
                  <div className="top flex justify-between px-1">
                     <div className="left">
                        <h5 className="font-semibold text-[12px]">Schwifty</h5>
                     </div>
                     <div className="right flex items-center">
                        <h5 className="text-white text-[12px] font-semibold">
                           {currentXP}K /
                        </h5>
                        <h5 className="text-white text-[12px] font-semibold">
                           {totalXP}K
                        </h5>
                     </div>
                  </div>
                  <div className="bottom w-full">
                     <div className="slider h-[12px] w-full border rounded-[20px] border-[#919191] bg-[#272A2F] relative overflow-hidden">
                        <div
                           className={`"slider-inside absolute h-full slider-bg left-0 top-0 rounded-3xl "`}
                           style={{ width: `${(currentXP / totalXP) * 100}%` }}
                        ></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="join-community join-community-bg flex-shrink-0 w-full rounded-[15px] h-12 mt-12 flex items-center justify-between px-6 cursor-pointer">
               <div className="left flex items-center gap-2">
                  <div className="yellow-dot-bigger w-[16px] flex items-center">
                     <div className="yellow-dot  bg-yellow-main"></div>
                  </div>
                  <div className="text font-semibold text-[18px]">
                     <h5>Schmeckle join community</h5>
                  </div>
               </div>
               <div className="right">
                  <svg
                     width="74"
                     height="20"
                     viewBox="0 0 60 8"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M57.3536 4.35355C57.5488 4.15829 57.5488 3.84171 57.3536 3.64645L54.1716 0.464466C53.9763 0.269204 53.6597 0.269204 53.4645 0.464466C53.2692 0.659728 53.2692 0.976311 53.4645 1.17157L56.2929 4L53.4645 6.82843C53.2692 7.02369 53.2692 7.34027 53.4645 7.53553C53.6597 7.7308 53.9763 7.7308 54.1716 7.53553L57.3536 4.35355ZM0 4.5H57V3.5H0V4.5Z"
                        fill="white"
                     />
                  </svg>
               </div>
            </div>
            <div className="images w-full flex justify-between px-2">
               <div className="left">
                  <Image src={OctopusLeftBlue} alt="octopus" />
               </div>
               <div className="right">
                  <Image src={OctopusRightBlue} alt="octopus" />
               </div>
            </div>
            <div className="total-balance w-full flex flex-col mt-8">
               <div className="title w-full flex justify-center">
                  <p className="font-semibold text-[12px]">Total Balance</p>
               </div>
               <div className="tokens-balance w-full flex justify-center items-center font-extrabold text-[50px] -mt-4 relative">
                  <h5 className="text-border">{formatBalance(balance)}</h5>
                  <div className="absolute bottom-2">
                     <svg
                        width="357"
                        height="15"
                        viewBox="0 0 357 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M357 7.5C357 11.6421 277.083 15 178.5 15C79.9172 15 0 11.6421 0 7.5C0 3.35786 79.9172 0 178.5 0C277.083 0 357 3.35786 357 7.5ZM17.85 7.5C17.85 11.2279 89.7755 14.25 178.5 14.25C267.225 14.25 339.15 11.2279 339.15 7.5C339.15 3.77208 267.225 0.75 178.5 0.75C89.7755 0.75 17.85 3.77208 17.85 7.5Z"
                           fill="#FAFF00"
                        />
                     </svg>
                  </div>
               </div>
            </div>
            <div className="game-join-container w-full px-1 mt-16">
               <div className="container w-full h-auto border border-yellow-main rounded-[15px] flex flex-col relative overflow-hidden">
                  <div className="game-join-bg-img absolute w-full h-full z-10">
                     <Image
                        src={GameJoinBg}
                        alt="bg"
                        className="w-full h-auto "
                     />
                  </div>
                  <div className="top flex gap-4 justify-center items-center relative z-20 pt-4">
                     <div className="left">
                        <Image src={PolygonLeft} alt="left" />
                     </div>
                     <div className="middle flex items-center gap-1">
                        <div className="left">
                           <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fill-rule="evenodd"
                                 clip-rule="evenodd"
                                 d="M13.6138 2.30996C13.8904 2.42774 14.07 2.69935 14.07 3.00002V9.99821H18C18.2667 9.99821 18.5133 10.1398 18.6478 10.3702C18.7822 10.6005 18.7842 10.885 18.653 11.1172L18.1609 11.988C16.2948 15.2907 13.9149 18.2753 11.1106 20.8298L10.3151 21.5545C10.0955 21.7545 9.7786 21.8061 9.50693 21.6861C9.23526 21.566 9.06 21.297 9.06 21V14.0612H5C4.58579 14.0612 4.25 13.7254 4.25 13.3112C4.25 13.177 4.28523 13.0511 4.34693 12.9421C6.10572 9.69066 8.3575 6.73119 11.0222 4.16896L12.8002 2.45939C13.0169 2.251 13.3371 2.19218 13.6138 2.30996ZM6.28458 12.5612H9.81C10.2242 12.5612 10.56 12.8969 10.56 13.3112V19.2945C12.9786 17.009 15.0517 14.3827 16.7134 11.4982H13.32C12.9058 11.4982 12.57 11.1624 12.57 10.7482V4.76164L12.0619 5.25021C9.8111 7.41442 7.86782 9.87444 6.28458 12.5612Z"
                                 fill="#FAFF00"
                              />
                           </svg>
                        </div>
                        <div className="text flex items-center -mt-[4px]">
                           <h5 className="font-bold text-[22px] ">10</h5>
                        </div>
                     </div>
                     <div className="right">
                        <Image src={PolygonRight} alt="left" />
                     </div>
                  </div>
                  <div className="bottom flex justify-between items-center px-2 mt-2 relative pb-4 z-20">
                     <div className="left">
                        <Image
                           src={RickHead}
                           alt="rick"
                           className="w-20 h-auto"
                        />
                     </div>
                     <div className="middle flex flex-col gap-[6px] w-auto">
                        <h5 className="text-[18px] font-medium">
                           Play and Earn SHM
                        </h5>
                        <button className="bg-yellow-main w-2/3  mx-auto rounded-full text-black font-semibold">
                           Play
                        </button>
                     </div>

                     <div className="right">
                        <Image src={Ufo} alt="ufo" className="w-20 h-auto" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="farming h-full flex items-center mb-0">
               <Farming onClaim={handleClaim} />
            </div>
         </main>
         <BottomNavbar />
      </>
   );
}
