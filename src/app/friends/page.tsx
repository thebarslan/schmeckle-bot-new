"use client";
import React, { useEffect, useState } from "react";
import Lemon from "../assets/lemon.png";
import Image from "next/image";
import BottomNavbar from "../components/bottomnavbar";
import Monster2 from "../assets/squanchy.png";

const FriendsPage = () => {
   const [isFriensInvitedBefore, setIsFriensInvitedBefore] = useState(false);
   const [balance, setBalance] = useState(2550.555);
   const totalSeconds = 6 * 60 * 60;
   const [remainingTime, setRemainingTime] = useState(totalSeconds);
   function formatBalance(balance: number): string {
      return new Intl.NumberFormat("en-US", {
         minimumFractionDigits: 3,
         maximumFractionDigits: 3,
      }).format(balance);
   }
   const formatTime = (seconds: number) => {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      return `${h}h ${m}m`;
   };
   useEffect(() => {
      // Update the current value every second
      const interval = setInterval(() => {
         setRemainingTime((prevCurrent) => {
            if (prevCurrent < 0) {
               clearInterval(interval);
               return 0;
            }
            const newCurrent = prevCurrent - 1;
            return newCurrent;
         });
      }, 1000);

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
   }, []);

   const [totalFriends, setTotalFriends] = useState(1100);
   const lastThreeFriends = [
      {
         profilePic: "",
         userId: "ASCBS_11",
         totalEarned: 825.55,
         id: 0,
      },
      {
         profilePic: "",
         userId: "ASCBS_12",
         totalEarned: 75.55,
         id: 1,
      },
      {
         profilePic: "",
         userId: "ASCBS_13",
         totalEarned: 925.55,
         id: 2,
      },
   ];
   return (
      <>
         <div className="friends w-full flex flex-col px-6 mt-[24px] h-full">
            <div className="title-container w-full flex items-center justify-center text-center">
               <h5 className="font-extrabold text-[24px]">
                  Invite friends, Earn SHM
               </h5>
            </div>
            <div className="title-container w-full flex items-center justify-center text-center mt-1">
               <p className="font-semibold text-[15px]">
                  Invite your friends to earn more SHM Tokens!
               </p>
            </div>
            {isFriensInvitedBefore ? (
               <div className="container w-full flex flex-col mt-3">
                  <div className="pt-2 pb-5 earning-from-invited-friends w-full border-2 border-opacity-white flex flex-col gap-2 rounded-2xl items-center">
                     <div className="totalEarnings">
                        <h5 className="font-extrabold text-[30px]">
                           {formatBalance(balance)}
                        </h5>
                     </div>
                     <div className="remaining-time-button w-full flex justify-center items-center">
                        <button className="remaining-time-btn px-4 py-2 rounded-full bg-[#616161] font-medium">
                           Claim in {formatTime(remainingTime)}
                        </button>
                     </div>
                  </div>
                  <div className="info-text-container w-full flex justify-center items-center text-center mt-2">
                     <p className="text-[11px] w-full font-medium">
                        Invite your friends and get 10% more + and an extra 1.5%
                        from referrals
                     </p>
                  </div>
                  <div className="friends-list-container mt-2">
                     <div className="friends-count w-full flex justify-start">
                        <h5 className="text-[15px] font-bold">
                           {totalFriends} friends
                        </h5>
                     </div>
                     <div className="friends-list mt-1">
                        {lastThreeFriends.map((friend) => (
                           <div
                              className="friend-container w-full border-b border-b-white py-3 pl-2 flex justify-between h-full"
                              key={friend.id}
                           >
                              <div className="friend-left h-full flex items-center gap-4">
                                 <div className="friend-profile-pic-container h-[36px] w-[36px] bg-[#0019FF] rounded-full"></div>
                                 <div className="friend-user-id-container">
                                    <h5 className="font-bold text-[12px]">
                                       {friend.userId}
                                    </h5>
                                 </div>
                              </div>
                              <div className="friend-right h-auto flex items-center justify-center">
                                 <h5 className="text-[12px] font-bold">
                                    {friend.totalEarned} SHMT
                                 </h5>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            ) : (
               <div className="explanation-container w-full flex flex-col mt-12 gap-8">
                  <div className="explanation-item flex gap-4 items-center">
                     <div className="explanation-number h-[36px] w-[36px] rounded-full bg-white text-center">
                        <h5 className="text-black text-[20px] font-extrabold leading-[34px] align-middle">
                           1
                        </h5>
                     </div>
                     <div className="explanation-text flex flex-col">
                        <p className="text-white font-bold text-[16px]">
                           Share your invitation link
                        </p>
                     </div>
                  </div>
                  <div className="explanation-item flex gap-4 items-center">
                     <div className="explanation-number h-[36px] w-[36px] rounded-full bg-white text-center">
                        <h5 className="text-black text-[20px] font-extrabold leading-[34px] align-middle">
                           2
                        </h5>
                     </div>
                     <div className="explanation-text flex flex-col">
                        <p className="text-white font-bold text-[16px]">
                           Your friends join Schmeckle
                        </p>
                        <p className="text-white-text text-[12px] font-bold">
                           And start earning SHMT tokens.
                        </p>
                     </div>
                  </div>
                  <div className="explanation-item flex gap-4 items-center">
                     <div className="explanation-number h-[36px] w-[36px] rounded-full bg-white text-center">
                        <h5 className="text-black text-[20px] font-extrabold leading-[30px] align-middle">
                           3
                        </h5>
                     </div>
                     <div className="explanation-text flex flex-col">
                        <p className="text-white font-bold text-[16px]">
                           Earn 10% more SHMT
                        </p>
                        <p className="text-white-text text-[12px] font-bold">
                           Invite your friends and get 10% more!
                        </p>
                     </div>
                  </div>
               </div>
            )}

            <div className="invite-friend-button w-full flex items-center justify-center h-full flex-1">
               <div className="button-inside-container w-full relative animated-button">
                  <div className="absolute left-2 -top-6">
                     <Image
                        src={Monster2}
                        alt="monster"
                        loading="eager"
                        className="h-[100px] w-auto"
                     />
                  </div>
                  <button
                     className="w-full bg-yellow-main rounded-[10px] text-black font-bold hover:bg-yellow-main hover:text-black transition-colors duration-500"
                     onClick={() => setIsFriensInvitedBefore(true)}
                  >
                     <h5 className="text-[18px]">Invite friends +</h5>
                  </button>
               </div>
            </div>
         </div>
         <BottomNavbar />
      </>
   );
};

export default FriendsPage;
