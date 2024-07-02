"use client";
import React, { useEffect, useState } from "react";
import RickNavbar from "../assets/ricknavbar.png";
import Logo from "../assets/logo.png";
import { usePathname } from "next/navigation";
import Image from "next/image";

const BottomNavbar = () => {
   const [navIndex, setNavIndex] = useState(0);
   const pathname = usePathname();
   useEffect(() => {
      switch (pathname) {
         case "/":
            setNavIndex(0);
            break;
         case "/tasks":
            setNavIndex(1);
            break;
         case "/friends":
            setNavIndex(2);
            break;
         case "/game":
            setNavIndex(3);
            break;
         case "/wallet":
            setNavIndex(4);
            break;
         default:
            setNavIndex(0);
            break;
      }
   }, [pathname]);

   return (
      <div className="navbar w-full flex text-center px-5 justify-between pb-2 pt-6 flex-shrink-0">
         <div className="navbar-inside flex justify-between w-full bg-[#272A2F] px-2  items-center rounded-[15px] h-[60px]">
            <div className="nav-item flex flex-col gap-1 flex-1 w-full items-center">
               <a href="/">
                  <div className="icon-container w-auto flex justify-center h-[32px] items-center">
                     <Image
                        src={RickNavbar}
                        alt="rick"
                        className="w-auto h-full"
                        loading="eager"
                     />
                  </div>

                  <div className="nav-title-container">
                     <p
                        className={`${
                           navIndex === 0 ? `text-white` : `text-[#919191]`
                        } text-[11px] font-normal`}
                     >
                        Home
                     </p>
                  </div>
               </a>
            </div>
            <div className="nav-item flex flex-col gap-1 flex-1 w-full items-center">
               <a href="/tasks">
                  <div className="icon-container w-auto flex justify-center h-[32px] items-center">
                     <svg
                        width="22"
                        height="22"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M29.7798 23.3486L15.5322 29.8991C15.3642 29.9657 15.1832 30 15.0004 30C14.8175 30 14.6366 29.9657 14.4685 29.8991L0.220239 23.3486C-0.0697877 23.2147 -0.0697877 22.995 0.220239 22.8604L3.6324 21.2948C3.80069 21.2282 3.98188 21.1939 4.16496 21.1939C4.34805 21.1939 4.52924 21.2282 4.69753 21.2948L14.4685 25.7814C14.6365 25.8484 14.8174 25.8829 15.0004 25.8829C15.1833 25.8829 15.3643 25.8484 15.5322 25.7814L25.3032 21.2948C25.4714 21.2282 25.6524 21.1939 25.8354 21.1939C26.0184 21.1939 26.1994 21.2282 26.3676 21.2948L29.7798 22.8638C30.0734 22.995 30.0734 23.2147 29.7798 23.3486ZM29.7798 14.206L26.3676 12.637C26.1994 12.5704 26.0184 12.536 25.8354 12.536C25.6524 12.536 25.4714 12.5704 25.3032 12.637L15.5322 17.129C15.3641 17.1953 15.1832 17.2294 15.0004 17.2294C14.8176 17.2294 14.6366 17.1953 14.4685 17.129L4.69753 12.637C4.52924 12.5704 4.34805 12.5361 4.16496 12.5361C3.98188 12.5361 3.80069 12.5704 3.6324 12.637L0.220239 14.206C-0.0697877 14.3399 -0.0697877 14.5602 0.220239 14.6955L14.4685 21.2446C14.6366 21.3112 14.8175 21.3455 15.0004 21.3455C15.1832 21.3455 15.3642 21.3112 15.5322 21.2446L29.7798 14.6955C30.0734 14.5602 30.0734 14.3406 29.7798 14.206ZM0.220239 6.5908L14.4678 12.637C14.8097 12.7609 15.1896 12.7609 15.5315 12.637L29.7798 6.5908C30.0698 6.46625 30.0698 6.26335 29.7798 6.13946L15.5315 0.093928C15.1899 -0.0313093 14.8094 -0.0313093 14.4678 0.093928L0.220239 6.13946C-0.073413 6.26335 -0.073413 6.46625 0.220239 6.5908Z"
                           fill={`${navIndex === 1 ? `white` : `#919191`}`}
                        />
                     </svg>
                  </div>
                  <div className="nav-title-container">
                     <p
                        className={`${
                           navIndex === 1 ? `text-white` : `text-[#919191]`
                        } text-[11px] font-normal`}
                     >
                        Tasks
                     </p>
                  </div>
               </a>
            </div>
            <div className="nav-item flex flex-col gap-1 flex-1 w-full items-center">
               <a href="/friends">
                  <div className="icon-container w-auto flex justify-center h-[32px] items-center">
                     <div className="container h-full flex items-center justify-center">
                        <svg
                           width="22"
                           height="22"
                           viewBox="0 0 25 25"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M12.9167 23.1C12.7083 22.7875 12.5 22.5791 12.3958 22.2666C11.875 21.3291 11.6667 20.2875 11.6667 19.2458C11.6667 17.6833 12.2917 16.225 13.2292 15.0791C13.4375 14.8708 13.5417 14.6625 13.75 14.5583C13.75 14.4541 14.2708 14.1416 14.5833 13.9333C16.4583 12.7875 17.6042 10.7041 17.3958 8.5167C17.2917 7.5792 16.9792 6.6417 16.5625 6.0167C15.7292 4.66253 14.375 3.62086 12.7083 3.30836C8.95833 2.5792 5.625 5.3917 5.625 9.03753C5.625 11.0166 6.56249 12.6833 8.02083 13.725C5.41667 14.6625 3.33333 16.6416 2.1875 19.2458C1.77083 20.2875 1.875 21.4333 2.5 22.3708C3.33333 23.3083 4.375 23.9333 5.625 23.9333H13.75C13.4375 23.6208 13.125 23.4125 12.9167 23.1Z"
                              fill={`${navIndex === 2 ? `white` : `#919191`}`}
                           />
                           <path
                              d="M18.1252 14.3501C17.7085 14.3501 17.2918 14.4543 16.8752 14.5584C16.5627 14.6626 16.146 14.7668 15.8335 14.9751C15.521 15.0793 15.3127 15.2876 15.0002 15.4959C13.9585 16.3293 13.3335 17.6834 13.3335 19.1418C13.3335 20.2876 13.7502 21.3293 14.3752 22.1626C14.6877 22.4751 15.0002 22.7876 15.3127 22.9959C16.0418 23.5168 16.8752 23.8293 17.7085 23.8293C17.8127 23.8293 17.9168 23.8293 18.021 23.8293C20.6252 23.8293 22.8127 21.6418 22.8127 19.0376C22.9168 16.5376 20.7293 14.3501 18.1252 14.3501Z"
                              fill={`${navIndex === 2 ? `white` : `#919191`}`}
                           />
                           <path
                              d="M20.5207 18.3085H19.0623V16.8501C19.0623 16.3293 18.6457 16.0168 18.229 16.0168C17.8123 16.0168 17.3957 16.4335 17.3957 16.8501V18.3085H15.9373C15.4165 18.3085 15.104 18.7251 15.104 19.1418C15.104 19.6626 15.5207 19.9751 15.9373 19.9751H17.3957V21.4335C17.3957 21.9543 17.8123 22.2668 18.229 22.2668C18.6457 22.2668 19.0623 21.8501 19.0623 21.4335V19.9751H20.5207C21.0415 19.9751 21.354 19.5585 21.354 19.1418C21.354 18.7251 20.9373 18.3085 20.5207 18.3085Z"
                              fill={`${navIndex === 2 ? `#919191` : `white`}`}
                           />
                        </svg>
                     </div>
                  </div>
                  <div className="nav-title-container">
                     <p
                        className={`${
                           navIndex === 2 ? `text-white` : `text-[#919191]`
                        } text-[11px] font-normal`}
                     >
                        Friends
                     </p>
                  </div>
               </a>
            </div>
            <div className="nav-item flex flex-col gap-1 flex-1 w-full items-center">
               <a href="/">
                  <div className="icon-container w-auto flex justify-center h-[32px] items-center">
                     <div className="container h-full flex items-center justify-center">
                        <svg
                           width="25"
                           height="25"
                           viewBox="0 0 25 25"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5002 2.34375C12.9317 2.34375 13.2815 2.69353 13.2815 3.125V4.93427C14.7725 4.95474 16.263 5.03382 17.7494 5.1715L18.0948 5.2035C20.4539 5.42202 22.2704 7.38104 22.3106 9.7499L22.3232 10.4931C22.3722 13.3835 22.1392 16.2719 21.6275 19.1171C21.3947 20.412 20.2679 21.3542 18.9523 21.3542H18.722C17.5381 21.3542 16.4655 20.6565 15.9855 19.5744L14.8808 17.0834C13.9651 15.019 11.0353 15.019 10.1197 17.0834L9.01493 19.5744C8.53496 20.6565 7.46232 21.3542 6.27847 21.3542H6.04821C4.73259 21.3542 3.6058 20.412 3.37295 19.1171C2.86129 16.2719 2.62829 13.3835 2.67728 10.4931L2.68988 9.7499C2.73003 7.38104 4.54661 5.42202 6.9057 5.2035L7.25112 5.1715C8.7375 5.03382 10.228 4.95474 11.719 4.93427V3.125C11.719 2.69353 12.0688 2.34375 12.5002 2.34375ZM17.7086 8.33333C17.7086 7.75804 17.2422 7.29167 16.6669 7.29167C16.0916 7.29167 15.6252 7.75804 15.6252 8.33333V8.59375C15.6252 9.16904 16.0916 9.63542 16.6669 9.63542C17.2422 9.63542 17.7086 9.16904 17.7086 8.59375V8.33333ZM8.33359 7.55208C8.76505 7.55208 9.11484 7.90186 9.11484 8.33333V9.63542H10.4169C10.8484 9.63542 11.1981 9.9852 11.1981 10.4167C11.1981 10.8481 10.8484 11.1979 10.4169 11.1979H9.11484V12.5C9.11484 12.9315 8.76505 13.2812 8.33359 13.2812C7.90211 13.2812 7.55234 12.9315 7.55234 12.5V11.1979H6.25025C5.81877 11.1979 5.469 10.8481 5.469 10.4167C5.469 9.9852 5.81877 9.63542 6.25025 9.63542H7.55234V8.33333C7.55234 7.90186 7.90211 7.55208 8.33359 7.55208ZM16.6669 11.1979C17.2422 11.1979 17.7086 11.6643 17.7086 12.2396V12.5C17.7086 13.0753 17.2422 13.5417 16.6669 13.5417C16.0916 13.5417 15.6252 13.0753 15.6252 12.5V12.2396C15.6252 11.6643 16.0916 11.1979 16.6669 11.1979ZM18.7502 11.4583C19.3255 11.4583 19.7919 10.992 19.7919 10.4167C19.7919 9.84137 19.3255 9.375 18.7502 9.375H18.4898C17.9145 9.375 17.4481 9.84136 17.4481 10.4167C17.4481 10.992 17.9145 11.4583 18.4898 11.4583H18.7502ZM15.8856 10.4167C15.8856 10.992 15.4193 11.4583 14.844 11.4583H14.5836C14.0083 11.4583 13.5419 10.992 13.5419 10.4167C13.5419 9.84136 14.0083 9.375 14.5836 9.375H14.844C15.4193 9.375 15.8856 9.84137 15.8856 10.4167Z"
                              fill={`${navIndex === 3 ? `white` : `#6F6F6F`}`}
                           />
                        </svg>
                     </div>
                  </div>
                  <div className="nav-title-container">
                     <p
                        className={`${
                           navIndex === 3 ? `text-white` : `text-[#919191]`
                        } text-[11px] font-normal`}
                     >
                        Game
                     </p>
                  </div>
               </a>
            </div>
            <div className="nav-item flex flex-col gap-1 flex-1 w-full items-center">
               <a href="/wallet">
                  <div className="icon-container w-auto flex justify-center h-[32px] items-center">
                     <Image
                        src={Logo}
                        alt="rick"
                        className="w-[32px] h-auto"
                        loading="eager"
                     />
                  </div>

                  <div className="nav-title-container">
                     <p
                        className={`${
                           navIndex === 4 ? `text-white` : `text-[#919191]`
                        } text-[11px] font-normal`}
                     >
                        Wallet
                     </p>
                  </div>
               </a>
            </div>
         </div>
      </div>
   );
};

export default BottomNavbar;
