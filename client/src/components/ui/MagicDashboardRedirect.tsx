import React, { useCallback } from "react";
import Image from "next/image";
import Info from "public/info.svg";
import Link from "public/link_white.svg";
import Logo from "public/logo.svg";

const MagicDashboardRedirect = () => {
  return (
    <div className="redirect-container">
      <div className="flex flex-col mt-10 gap-2.5 items-center">
        <div className="text-center text-white text-xl font-extrabold font-['Inter'] leading-[30px]">
          GG labs{" "}
        </div>
        <div className="text-center text-white text-opacity-50 text-base font-normal font-['SF Mono'] leading-normal">
          Wallet connect demo
        </div>
      </div>
      <div className="flex flex-col items-center flex-1">Some box</div>
    </div>
  );
};

export default MagicDashboardRedirect;
