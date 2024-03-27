"use client";
import React, { ReactNode } from "react";

const BannerButton = ({ children, }: { children: ReactNode, }) => {
  return (
    <button
      className={"w-full border border-black px-5 py-5  hover:-translate-y-px grow shadow-[rgba(249,139,0,1)_-4px_4px_1px_0px] hover:shadow-[rgba(249,139,0,1)_-10px_10px_1px_0px] transition flex flex-row "}
    >
      {children}
    </button>
  );
};
export default BannerButton;
