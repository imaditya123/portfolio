"use client";
import React from "react";
import AppButton from "../components/button";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className="h-[calc(100vh-6rem)] bg-[radial-gradient(30%_30%_at_20%_70%,rgba(251,191,36,0.3)_0%,rgba(255,255,255,0.00)_100%)] ">
        <div className="absolute  bottom-48 right-48 h-64 w-64 opacity-60 ">
          <Image src="/icons/dots.svg" fill alt="" />
        </div>
        <div className="relative">
          <div className=" w-2/3 h-1/4 mx-auto my-16 ">
            <h1 className="mt-auto text-4xl font-light">Aditya Rathore</h1>
            <div className="flex flex-row mb-14 ">
              <h1 className=" mt-auto text-7xl pr-5 text-black">
                Software <br></br>{" "}
              </h1>
              <h1 className=" mt-auto text-7xl pr-5 text-black">Engineer</h1>
              <div className="relative">
                <Image src="/icons/gray_prop.svg" alt="" fill />
              </div>
            </div>

            <AppButton
              onTap={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Say Hello
            </AppButton>

            <div className="max-h-full w-64 flex flex-row  content-center pl-14 py-24 m-auto">
              <div className="relative h-6 w-6 my-2 transform hover:h-8 hover:w-8 mx-1">
                <Image src="/icons/hugging_face.svg" alt="hugging face" fill />
              </div>
              <div className="relative h-6 w-6 my-2 transform hover:h-8 hover:w-8 mx-1">
                <Image src="/icons/github.svg" alt="github" fill />
              </div>
              <div className="relative h-6 w-6 my-2 transform hover:h-8 hover:w-8 mx-1">
    
                <Image src="/icons/twitter.svg" alt="twitter" fill />
              </div>
              <div className="relative h-6 w-6 my-2 transform hover:h-8 hover:w-8 mx-1">
                <Image src="/icons/linkedin.svg" alt="linked in" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
