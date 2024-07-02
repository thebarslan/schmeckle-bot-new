"use client";
import React, { useState, useEffect } from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane, FaCheck } from "react-icons/fa";
import Logo from "../assets/logo.png";
import BottomNavbar from "../components/bottomnavbar";
import Image from "next/image";

interface Task {
   taskIcon: JSX.Element;
   taskText: string;
   taskReward: number;
   taskLink: string;
   taskKey: string;
   completed?: boolean;
}

const TasksPage: React.FC = () => {
   const [tasks, setTasks] = useState<Task[]>([
      {
         taskIcon: <FaTelegramPlane className="h-[30px] w-auto" />,
         taskText: "Subscribe to Shmeckle Telegram",
         taskReward: 100,
         taskLink: "https://t.me/SchmeckleAnnouncement",
         taskKey: "joinTelegramGeneral",
      },
      {
         taskIcon: <FaTelegramPlane className="h-[30px] w-auto" />,
         taskText: "Subscribe to Shmeckle Telegram Channel",
         taskReward: 100,
         taskLink: "https://t.me/Schmeckleofficial",
         taskKey: "joinTelegramCommunity",
      },
      {
         taskIcon: <BsTwitterX className="h-[30px] w-auto" />,
         taskText: "Follow Shmeckle Twitter",
         taskReward: 80,
         taskLink: "https://twitter.com/Schmeckle_Token",
         taskKey: "followTwitter",
      },
      {
         taskIcon: <BsTwitterX className="h-[30px] w-auto" />,
         taskText: "Tweet Shmeckle Twitter",
         taskReward: 80,
         taskLink: "https://twitter.com/Schmeckle_Token",
         taskKey: "tweet",
      },
      {
         taskIcon: <BsInstagram className="h-[30px] w-auto" />,
         taskText: "Follow Shmeckle Instagram",
         taskReward: 80,
         taskLink: "https://twitter.com/Schmeckle_Token",
         taskKey: "followInstagram",
      },
   ]);

   return (
      <div className="w-full h-full tasks flex flex-col mt-[16px] ">
         <div className="tasks-title w-full flex flex-col items-center px-6">
            <h5 className="font-extrabold text-[30px]">
               {tasks.length} tasks available
            </h5>
            <p className="font-bold text-[12px] text-white-text">
               Complete missions and earn SHMT Tokens!
            </p>
         </div>
         <div className="custom-scroll tasks-list mt-6 flex flex-col w-full h-full px-6 gap-3">
            {tasks.map((task) => (
               <div
                  className="task-container w-full flex justify-between h-16 px-4 items-center rounded-[15px] bg-[#272A2F]"
                  key={task.taskKey}
               >
                  <div className="task-container-left flex h-full w-full">
                     <div className="task-icon h-full flex items-center">
                        {task.taskIcon}
                     </div>
                     <div className="task-middle w-full flex flex-col gap-0 pl-4 flex-1 justify-center">
                        <p className="task-text font-medium text-[12px]">
                           {task.taskText}
                        </p>
                        <div className="reward-text flex gap-2 items-center -mt-[2px]">
                           <Image
                              src={Logo}
                              alt="logo"
                              className="h-9 w-auto -ml-1"
                           />
                           <p className="task-reward font-bold text-[15px]">
                              +{task.taskReward} SHMT
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="task-container-right flex h-full items-center">
                     {task.completed ? (
                        <button
                           className="text-[12px] font-bold px-4 py-1 bg-green-500 rounded-[10px] transition-colors duration-500"
                           disabled
                        >
                           <FaCheck className="text-white bg-green-500 rounded-full w-7 h-4 p-1" />
                        </button>
                     ) : (
                        <a
                           href={task.taskLink}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <button
                              className="text-[12px] font-bold px-4 py-1 text-black bg-yellow-main rounded-[10px] hover:text-white hover:bg-black transition-colors duration-500"
                              onClick={() => {}}
                           >
                              Start
                           </button>
                        </a>
                     )}
                  </div>
               </div>
            ))}
         </div>
         <BottomNavbar />
      </div>
   );
};

export default TasksPage;
