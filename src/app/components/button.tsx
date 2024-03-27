'use client'
import React, { ReactNode } from "react";
import "../globals.css";

const AppButton = ({onTap,children}: {
  onTap: any;
  children: ReactNode;
}) => {
  return (
    <button
      onClick={onTap}
      className="border-2 border-black px-5 py-1  hover:-translate-y-px
shadow-[rgba(0,0,0,1)_-2px_2px_1px_0px]
  hover:shadow-[rgba(0,0,0,1)_-5px_5px_1px_0px] transition
"
    >
      {children}
    </button>
  );
};
export default AppButton;
