import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
import BottomNavbar from "../components/bottomnavbar";

const Wallet = () => {
   return (
      <div className="w-full h-full flex flex-col pt-20">
         <div className="image-container w-full flex items-center justify-center">
            <Image src={Logo} alt="logo" className="h-56 w-auto" />
         </div>
         <div className="text-container w-full px-5 flex items-center justify-center">
            <h5 className="font-extrabold text-[28px]">Integrate the wallet</h5>
         </div>
         <div className="text-container w-full px-5 flex items-center justify-center mt-[2px]">
            <p className="font-bold text-[13px]">It will be active soon.</p>
         </div>
         <div className="button-container w-full flex items-center justify-center px-6 mt-12">
            <button className="bg-yellow-main h-14 w-full rounded-[15px] flex items-center justify-center relative">
               <h5 className="font-semibold text-[17px] text-black">
                  Connect Wallet
               </h5>
               <div className="absolute left-4">
                  <svg
                     width="32"
                     height="32"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.0103 10.1713L21.0129 13.7942C20.9874 14.1393 20.9545 14.484 20.9142 14.8281C20.8469 15.4035 20.3792 15.8677 19.7918 15.9333C17.952 16.139 16.0482 16.139 14.2085 15.9333C13.6211 15.8677 13.1533 15.4035 13.086 14.8281C12.8662 12.9491 12.8662 11.0509 13.086 9.17189C13.1533 8.59648 13.6211 8.13234 14.2085 8.06669C16.0482 7.86107 17.952 7.86107 19.7918 8.06669C20.3792 8.13234 20.8469 8.59648 20.9142 9.17189C20.9531 9.5045 20.9852 9.8377 21.0103 10.1713ZM17.0001 10.5C16.1717 10.5 15.5001 11.1716 15.5001 12C15.5001 12.8284 16.1717 13.5 17.0001 13.5C17.8285 13.5 18.5001 12.8284 18.5001 12C18.5001 11.1716 17.8285 10.5 17.0001 10.5Z"
                        fill="black"
                     />
                     <path
                        d="M20.4035 6.03973C20.559 6.30899 20.2672 6.61051 19.9582 6.57597C18.0077 6.35798 15.9921 6.35798 14.0416 6.57597C12.7723 6.71784 11.7457 7.71738 11.596 8.99764C11.3627 10.9924 11.3627 13.0076 11.596 15.0024C11.7457 16.2826 12.7723 17.2822 14.0416 17.4241C15.9921 17.642 18.0077 17.642 19.9582 17.4241C20.2692 17.3893 20.5635 17.6929 20.4065 17.9637C19.6279 19.3065 18.2398 20.2437 16.6267 20.4134L15.9749 20.482C12.664 20.8304 9.32462 20.8074 6.01887 20.4135L5.58692 20.362C3.8048 20.1497 2.39275 18.7573 2.15538 16.9784C1.71448 13.6741 1.71448 10.3259 2.15538 7.02166C2.39275 5.2427 3.8048 3.85034 5.58692 3.63798L6.01886 3.58651C9.32461 3.19258 12.664 3.16961 15.9749 3.51801L16.6267 3.58661C18.2411 3.75649 19.627 4.6951 20.4035 6.03973Z"
                        fill="black"
                     />
                  </svg>
               </div>
            </button>
         </div>
         <div className="empty h-full flex-1"></div>
         <BottomNavbar />
      </div>
   );
};

export default Wallet;
