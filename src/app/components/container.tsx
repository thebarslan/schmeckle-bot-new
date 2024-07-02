import Image from "next/image";
import React from "react";
import BackgroundImg from "../assets/background-img.png";

export default function Container({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div className="container w-screen h-screen max-w-[500px] max-h-[900px] bg-main-bg relative overflow-hidden">
         <div className="container-bg absolute left-0 top-0 w-screen h-screen max-w-[500px] max-h-[900px] z-[10] border"></div>
         {children}
      </div>
   );
}
