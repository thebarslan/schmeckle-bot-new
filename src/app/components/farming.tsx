import React, { useEffect, useState } from "react";

interface FarmingProps {
   onClaim: (earned: number) => void;
}

const Farming: React.FC<FarmingProps> = ({ onClaim }) => {
   const [limit] = useState<number>(1000);
   const [current, setCurrent] = useState<number>(0);
   const [isClaimable, setIsClaimable] = useState<boolean>(false);
   const [isStarted, setIsStarted] = useState<boolean>(false);
   const totalSeconds = 1 * 60; // Total seconds in 1 minute
   const increaseRate = limit / totalSeconds;

   const [widthPercentage, setWidthPercentage] = useState<number>(
      (current / limit) * 100
   );

   useEffect(() => {
      const storedCurrent = localStorage.getItem("current");
      const storedTimestamp = localStorage.getItem("timestamp");
      const storedIsStarted = localStorage.getItem("isStarted") === "true";

      if (storedCurrent && storedTimestamp) {
         const timeElapsed = (Date.now() - parseInt(storedTimestamp)) / 1000;
         const newCurrent = Math.min(
            limit,
            parseFloat(storedCurrent) + increaseRate * timeElapsed
         );
         setCurrent(newCurrent);
         if (newCurrent >= limit) {
            setIsClaimable(true);
            setIsStarted(false);
         } else if (storedIsStarted) {
            setIsStarted(true);
         }
      }
   }, [increaseRate, limit]);

   useEffect(() => {
      if (isStarted && current < limit) {
         const interval = setInterval(() => {
            setCurrent((prevCurrent) => {
               if (prevCurrent >= limit) {
                  clearInterval(interval);
                  setIsClaimable(true);
                  setIsStarted(false);
                  return limit;
               }
               const newCurrent = parseFloat(
                  (prevCurrent + increaseRate).toFixed(3)
               );
               localStorage.setItem("current", newCurrent.toString());
               localStorage.setItem("timestamp", Date.now().toString());
               return newCurrent;
            });
         }, 1000);

         return () => clearInterval(interval);
      }
   }, [increaseRate, limit, current, isStarted]);

   useEffect(() => {
      setWidthPercentage((current / limit) * 100);
   }, [current, limit]);

   const formatTime = (seconds: number) => {
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60);
      return `${m}m ${s}s`;
   };

   const remainingTime = Math.max(0, (1 - current / limit) * totalSeconds);

   const handleClaim = () => {
      onClaim(current);
      setCurrent(0);
      setIsClaimable(false);
      setIsStarted(false);
      localStorage.setItem("current", "0");
      localStorage.setItem("timestamp", Date.now().toString());
      localStorage.setItem("isStarted", "false");
   };

   const handleStart = () => {
      setIsStarted(true);
      localStorage.setItem("isStarted", "true");
      localStorage.setItem("timestamp", Date.now().toString());
   };

   return (
      <div className="w-full flex flex-col gap-[6px]">
         <div className="w-full flex px-2 justify-between items-center">
            <h5 className="font-bold text-[15px]">Farming SHM</h5>
         </div>
         <div className="bar h-[60px] w-full rounded-[15px] bg-white relative flex items-center justify-center overflow-hidden">
            <div className="absolute right-4 z-100">
               <h5 className="font-semibold text-[14px] text-black">
                  {formatTime(remainingTime)}
               </h5>
            </div>
            {isClaimable ? (
               <button
                  className="w-full rounded-[5px] h-full bg-yellow-main flex justify-center items-center"
                  onClick={handleClaim}
               >
                  <h5 className="text-black font-extrabold text-[20px] relative z-60">
                     CLAIM SHMT
                  </h5>
               </button>
            ) : isStarted ? (
               <>
                  <div
                     className="inside-bar absolute left-0 top-0 bg-yellow-main h-full rounded-[5px] flex items-center justify-center"
                     style={{ width: `${widthPercentage}%` }}
                  ></div>
                  <h5 className="text-[#3d3d3d] font-extrabold text-[24px] relative z-60 pb-[2px]">
                     {current.toFixed(3)}
                  </h5>
               </>
            ) : (
               <button
                  className="w-full rounded-[5px] h-full bg-yellow-main flex justify-center items-center"
                  onClick={handleStart}
               >
                  <h5 className="text-black font-extrabold text-[24px] relative z-60">
                     START
                  </h5>
               </button>
            )}
         </div>
      </div>
   );
};

export default Farming;
